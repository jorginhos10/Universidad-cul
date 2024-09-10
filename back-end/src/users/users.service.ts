import { Injectable, NotFoundException } from '@nestjs/common';

import { UpdateUserDto } from './dto/update-user.dto';
import { User, userStatus } from './entities/user.entity';

@Injectable()
export class UsersService {
  // FUNCION PARA TRAER A TODOS LOS USUARIOS
  async findAll() {
    const users = await User.findAll({
      where: {
        status: userStatus.active,
      },
    });

    const usersPromise = users.map(async (user) => {
      return user;
    });

    const userResolved = await Promise.all(usersPromise);

    return userResolved;
  }

  // FUNCION PARA TRAER UN USUARIO POR ID
  async findOne(id: number) {
    const user = await User.findOne({
      where: { id, status: userStatus.active },
    });

    if (!user) {
      throw new NotFoundException(`user with id ${id} not found`);
    }

    return user;
  }

  // FUNCION PARA ACTUALIZAR UN USUARIO POR ID (SOLO EL NOMBRE)
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await User.findOne({
      where: { id, status: userStatus.active },
    });
    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }

    await user.update({
      name: updateUserDto.name,
    });

    return {
      status: 'success',
      messge: 'User update successfully',
    };
  }
  // FUNCION PARA DESABILITAR EL ESTADO DE UN USUARIO (LO DESHABILITA)
  async remove(id: number) {
    const user = await User.findOne({
      where: { id, status: userStatus.active },
    });

    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }

    await user.update({
      status: userStatus.disabled,
    });

    return {
      status: 'success',
      message: 'user deleted successfully!',
    };
  }
}
