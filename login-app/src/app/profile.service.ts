import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private _url = 'url';
  private _headers = new Headers();

  constructor(private _http: Http) { }

  getProfile() {
    this._headers.append('Content-Type', 'application/json');
    let idToken = localStorage.getItem('id_token');
    this._headers.append('Authorization', 'Bearer ${ idToken }');

    let options = new RequestOptions({
      headers: this._headers
    });

    return this._http
      .get( this._url, options )
      .map( response => response.json() );
  }
}
