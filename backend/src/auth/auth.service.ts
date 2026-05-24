import { HttpStatus, Injectable } from '@nestjs/common';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  private readonly adminUser = {
    username: 'admin',
    password: 'matcha123',
  };

  public register() {
    return {
      message: 'Registration is not supported in this demo.',
    };
  }

  public login(credentials: AuthCredentialsDTO) {
    if (
      credentials.username === this.adminUser.username &&
      credentials.password === this.adminUser.password
    ) {
      return {
        success: true,
        user: {
          username: this.adminUser.username,
        },
      };
    }

    throw new ErrorHandler('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
}
