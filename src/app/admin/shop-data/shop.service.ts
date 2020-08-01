import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Shop } from '../shop-data/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient, private toarst: ToastrService) {}

  SelectedShop: Shop = <Shop>{
    //id: null,
    shopName: '',
    address: '',
    phone: '',
    email: ''
  };
 // auth_token = JSON.parse(localStorage.getItem('userData')).authToken;
  headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // 'Authorization': this.auth_token
    })
  };
  buttonCreate: boolean = false;
  nameCategory: string;
  resetButton(form: NgForm): void {
    if (form != null) {
      form.reset();
    }

    this.SelectedShop = {
      //id: null,
      shopName: '',
      address: '',
      phone: '',
      email: ''
    };
  }

  PutShop(form: NgForm): any {
    var shop: Shop = form.value;
    console.log(JSON.parse(localStorage.getItem('userData')));
    shop.email = JSON.parse(localStorage.getItem('userData')).email;
    this.http
      .put('https://localhost:5001/api/UserApi/CreateEditShop', JSON.stringify(shop), this.headers)
      .subscribe((data) => {
        this.resetButton(form);
        this.buttonCreate = false;
        this.toarst.success('Create Shop Success');
      });
  }
}
