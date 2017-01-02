import { Component, DoCheck } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbModal, NgbActiveModal]
})
export class NavbarComponent implements DoCheck {
  private _loginErr: boolean = false;
  private _loginText: string = '';

  private userData = {
    username: '',
    password: '',
    companyName: ''
  };
  
  constructor(
    private _modalService: NgbModal,
    private _userService: UserService,
    private _router: Router,
    private _activeModal: NgbActiveModal
  ) { }

  ngDoCheck() {
    this.checkLoginStatus();
    this.closeActiveModal();
  }

  signInOut(content) {
    if (this._userService.isLoggedIn) {
      this._userService.logout();
    } else {
      this._modalService.open(content);
    }
  }

  onSubmit( e: any, user: string, pass: string, company: string ) {
    e.preventDefault();
    this._userService.login(user, pass, company).subscribe( 
      res => { 
        this._loginErr = false;
        this._router.navigate(['loggedin']);
      },
      err => this._loginErr = true 
    );
  }

  checkLoginStatus() {
    this._loginText = this._userService.isLoggedIn ? 'Sign out' : 'Sign in';
  }

  closeActiveModal() {
    if (this._userService.isLoggedIn) this._activeModal.close(); // doesn't work
  }
}
