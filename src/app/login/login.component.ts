import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router'

import { SocialUser } from 'angularx-social-login';
import { UserService } from '../services/user.service';

import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService, private userService: UserService, private router: Router) {
   // this.user.sessionIn();
  }
  private isloggedIn: boolean;
  socialusers = new SocialUser();
  public responseData: any;

  ngOnInit() {
    // this.authService.authState.subscribe((socialusers) => {
    //   this.socialusers = socialusers;
    //   //console.log('khoi tao');
    // });
  }

  signInWithGoogle(): void {
    this.userService.signInWithGoogle().then(x => {
      console.log(x);
      this.userService.isloggedIn = true;
      this.apiConnection(x).subscribe(
        {
          next: data => {
              console.log(data.status);
              console.log(data.body);
              localStorage.setItem('userData', JSON.stringify(data.body));
              if (data.status == '202'){
                this.router.navigate(['']);
              }else if (data.status == '201'){
                this.router.navigate(['newshop']);
              }
            },
          error: error => console.error('There was an error!', error)
        }
      );
      // this.apiConnection(x).subscribe(response => {
      //   console.log(response);
      //   localStorage.setItem('userData', JSON.stringify(response));
      //   this.router.navigate( ['']);
      //   // if(userResponse.status == "201"){
      //   //   this.router.navigate( ['']);
      //   // }else if(status == "202"){
      //   //   this.router.navigate( ['newshop']);
      //   // }
      // },
      //status => console.log(status)
      // , err => {
      //   console.log('error');
      // },
      //);
    });
  }

  signInWithFB(): void {
    this.userService.signInWithFB().then(x => {
      console.log(x);
      this.isloggedIn = true;
      this.userService.isloggedIn = true;
      this.apiConnection(x).subscribe(
        {
          next: data => {
              console.log(data.status);
              console.log(data.body);
              localStorage.setItem('userData', JSON.stringify(data.body));
              if (data.status == '202'){
                this.router.navigate(['']);
              }else if (data.status == '201'){
                this.router.navigate(['newshop']);
              }
            },
          error: error => console.error('There was an error!', error)
        }
      );
    });
  }

  signOut(): void {
    this.userService.signOut();
    localStorage.clear();
    this.isloggedIn = false;
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  apiConnection(data) {
   const newUser = {
      name: data.name,
      email: data.email,
      authToken: data.authToken
    }

   return this.userService.postData(newUser);

  }


}
