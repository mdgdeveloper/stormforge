import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    // This is where we inject the AuthService into the AuthController
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
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
