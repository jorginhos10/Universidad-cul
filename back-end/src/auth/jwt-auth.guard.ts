import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer')) {
      throw new UnauthorizedException(
        'You are not logged in! Please log in to get access.',
      );
    }
    const token = authorization.split(' ')[1];

    let decoded;
    try {
      decoded = this.jwtService.verify(token, {
        secret: process.env.SECRET_JWT_SEDD,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
    const user = await this.userService.findOne(decoded.sub);

    if (!user) {
      throw new UnauthorizedException(
        '  The owner of this token is no longer available.',
      );
    }

    request.user = user;
    return true;
  }
}
