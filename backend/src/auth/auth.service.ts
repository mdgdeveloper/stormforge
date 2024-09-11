import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {
    // This is where we inject the UsersService into the AuthService
  }

  // SignIn Logic
  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (isMatch) {
        console.log('User is authenticated');
        const payload = { sub: user.id, email: user.email };
        return {
          access_token: await this.jwtService.sign(payload),
        };
      } else {
        throw new UnauthorizedException('Invalid credentials');
      }
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
