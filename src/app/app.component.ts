import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopmanager';
  constructor(private authService: AuthService, public userService: UserService) {}
  ngOnInit(): void {
    this.checked();
  }
  checkLogin = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.checked();
  }

  checked(){
    if (localStorage.getItem('userData')) {
      this.userService.isloggedIn = true;
    }
  }
}
