import { Component, DoCheck } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbModal]
})
export class NavbarComponent implements DoCheck {
  private _loginErr: boolean = false;
  private _loginText: string = '';
  private _activeModal: NgbModalRef;

  private userData = {
    username: '',
    password: '',
    companyName: ''
  };
  
  constructor(
    private _modalService: NgbModal,
    private _userService: UserService,
    private _router: Router,
  ) { }

  ngDoCheck() {
    this.checkLoginStatus();
    this.closeActiveModal();
  }

  signInOut(content) {
    if (this._userService.isLoggedIn) {
      // log out the user
      this._userService.logout();
    } else {
      // open modal and log in user
      this._activeModal = this._modalService.open(content);
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
    if (this._userService.isLoggedIn) {
      this._activeModal.close();
    }
  }

}
