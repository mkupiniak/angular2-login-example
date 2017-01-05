import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGard implements CanActivate {

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  canActivate() {
    // if user passed valid credentials
    if (this._userService.isLoggedIn) {
      return true;
    }

    // if not redirect to home
    this._router.navigate(['']);
    return false;
  }

}
