import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class LoginService {
  myEmail: any;
  createUserLogin(email: any, passwd: any):  Observable<any> {
    const login = {
      name: email,
      password: passwd
    }
    this.myEmail = email;
    //let body = JSON.stringify(login);
    //let val = this.http.post('/api/v1/login/valid', body, httpOptions);

    return of({
      useremail: email,
    });

  }
  public get currentUserValue() {
    return this.myEmail;
}
  constructor(private http: HttpClient) { }

}
