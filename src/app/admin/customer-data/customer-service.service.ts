import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Toast, ToastrService } from 'ngx-toastr';
import { Customer } from '../customer-data/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient, private toarst: ToastrService) {}
  customerList: Customer[];
  userId = JSON.parse(localStorage.getItem('userData')).id;
  customer: Customer = {
   // id: null,
    name: '',
    address: '',
    email: '',
    phone: null,
    UserId: null
  //  User: ''
   } as Customer;

   headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // 'Authorization': this.auth_token
    })
  };

  CreateCustomer(data): any {
    var customer: Customer = data;
    console.log(JSON.parse(localStorage.getItem('userData')));
    customer.UserId = this.userId;
    this.http
      .post('https://localhost:5001/api/CustomerApi/', JSON.stringify(customer), this.headers)
      .subscribe((data) => {
        this.toarst.success('Create Customer Success');
      });
  }

  CustomersList(): any{
    this.http
      .get<any>('https://localhost:5001/api/CustomerApi/?userId=' + this.userId)
      .subscribe((data) => {
        this.customerList = data;
        console.log(data);
      });
  }
}
