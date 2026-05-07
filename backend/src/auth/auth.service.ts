import { HttpStatus, Injectable } from '@nestjs/common';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';

@Injectable()
export class AuthService {
  public register() {
    throw new ErrorHandler('Auth is not ready yet', HttpStatus.NOT_IMPLEMENTED);
  }

  public login() {
    throw new ErrorHandler('Auth is not ready yet', HttpStatus.NOT_IMPLEMENTED);
  }
}
