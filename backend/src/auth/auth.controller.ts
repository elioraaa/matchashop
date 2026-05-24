import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  public register() {
    return this.authService.register();
  }

  @Post('login')
  public login(@Body() credentials: AuthCredentialsDTO) {
    return this.authService.login(credentials);
  }
}
