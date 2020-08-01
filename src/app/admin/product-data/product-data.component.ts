import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {

  public data: any;
  public userData: any;

  constructor(
    public socialAuthService: SocialAuthService,
    private userService: UserService,
    private router: Router,
    public productService: ProductService
  ) {}

  ngOnInit() {
    //this.user.sessionOut();
  }

  logout() {
    this.userService.signOut();
    this.router.navigate(['/login']);
    localStorage.clear();
  }

}
