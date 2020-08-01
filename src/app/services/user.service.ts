import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';

import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const apiUrl = 'https://localhost:5001/api/UserApi';

@Injectable()
export class UserService{

  public isloggedIn: boolean;
  redirectUrl: string;

  constructor(private authService: SocialAuthService, private router: Router, private http: HttpClient) {
    this.isloggedIn = false;
  }

  // headers = {
  //   headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //   })
  // };

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = {
    headers: this.headers,
    observe: 'response'
  }

  signInWithGoogle() {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB() {
    return this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.isloggedIn = false;
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  postData(credentials) {
    // return new Promise((resolve, reject) => {
    //   this.http.post(apiUrl, JSON.stringify(credentials), this.options)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    return this.http.post(apiUrl, JSON.stringify(credentials), this.options);
  }

}
