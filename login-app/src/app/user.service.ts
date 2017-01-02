import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  public isLoggedIn: boolean = false;

  constructor(
    private _http: Http,
    private _router: Router
  ) { }

  login(username: string, password: string, companyName: string) {
    let url = 'http://localhost:3001/sessions/create';
    
    let body = JSON.stringify({ username, password});
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let options = new RequestOptions({
      headers: headers
    });
    
    return this._http.post( url, body, options)
      .map(
        res => {
          let response = res.json();
          localStorage.setItem('id_token', response.id_token);
          this.isLoggedIn = true;
        },
        error => {
          console.log(error.json().text());
        }
      );
  }

  logout() {
    localStorage.removeItem('id_token');
    this.isLoggedIn = false;
    this._router.navigate(['']);
  }

}
