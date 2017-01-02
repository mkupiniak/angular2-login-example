import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGard implements CanActivate {

  constructor(private _userService: UserService) { }

  canActivate() {
    return this._userService.isLoggedIn;
  }

}
