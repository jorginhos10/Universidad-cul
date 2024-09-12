import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtHelpers {
  constructor(private readonly jwrservice: JwtService) {}
  generateJwt(userId: number): string {
    const payload = { sub: userId };
    return this.jwrservice.sign(payload);
  }
}
