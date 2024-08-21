import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    // This is where we inject the AuthService into the AuthController
  }

  @Post('register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  login() {
    // Login logic
  }

  @Post('logut')
  logout() {
    // Logout logic
  }

  @Post('refresh')
  refresh() {
    // Refresh token logic
  }

  @Post('password-reset/request')
  passwordResetRequest() {
    // Password reset request logic
  }

  @Post('password-reset/reset')
  passwordReset() {
    // Password reset logic
  }
}
