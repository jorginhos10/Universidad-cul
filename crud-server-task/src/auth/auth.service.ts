import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { User, userStatus } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { JwtHelpers } from 'src/helpers/jwt.helper';
import { UniqueConstraintError } from 'sequelize';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtHelpers: JwtHelpers,
    private readonly usersService: UsersService,
  ) {}

  // FUNCION PAR EL REGISTRO DEL USUARIO
  async signUp(user: CreateUserDto) {
    // ENCRIPTACION DE LA CLAVE DEL USUARIO UTILIZANDO CIFRADO AVANZADO (aes-256-ctr)
    const iv = randomBytes(16);
    const key = (await promisify(scrypt)(user.password, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const textToEncrypt = user.password;
    const encryptedPassword = Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]);
    // Convierte el IV y la contraseña encriptada a formato hexadecimal para almacenarlos como texto
    const encryptedPasswordWithIv = `${iv.toString('hex')}:${encryptedPassword.toString('hex')}`;

    try {
      const Cuser = await User.create({
        name: user.name,
        email: user.email,
        password: encryptedPasswordWithIv,
      });

      const token = this.jwtHelpers.generateJwt(Cuser.id);

      return {
        status: 'success',
        message: 'The user has been created',
        token,
        user: {
          id: Cuser.id,
          name: user.name,
          email: user.email,
        },
      };
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }

    // GENERARNDO EL TOKEN CON EL ID DEL USUARIO, UTILIZANDO JWT
  }

  // FUNCION PARA EL INICIO DE SESION DEL USUARIO
  async signIn(email: string, password: string) {
    const user = await User.findOne({
      where: {
        email: email.toLowerCase().trim(),
        status: userStatus.active,
      },
    });

    if (!user) {
      throw new NotFoundException(`this email not found`);
    }

    // Separar el IV y la contraseña encriptada almacenada
    const [ivHex, encryptedPasswordHex] = user.password.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedPassword = Buffer.from(encryptedPasswordHex, 'hex');

    // Recuperar la clave para descifrar (debería ser la misma que la usada para cifrar la contraseña)
    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    const decipher = createDecipheriv('aes-256-ctr', key, iv);

    const decryptedPassword = Buffer.concat([
      decipher.update(encryptedPassword),
      decipher.final(),
    ]).toString();

    // Comparar la contraseña ingresada con la descifrada
    if (password !== decryptedPassword) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    // Generar el token si la contraseña es correcta
    const token = this.jwtHelpers.generateJwt(user.id);

    return {
      status: 'success',
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  async getProfile(userId: number) {
    const user = await this.usersService.findOne(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}
