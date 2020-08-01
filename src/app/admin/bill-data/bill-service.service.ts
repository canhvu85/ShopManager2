import { Injectable } from '@angular/core';
import { Product } from '../product-data/product';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { Bill } from '../bill-data/bill';
import { BillDetail } from '../bill-data/bill-detail';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  constructor(private http: HttpClient, private toarst: ToastrService) { }
  SelectedBillDetail: BillDetail = new BillDetail();
  SelectedBill: Bill = {
    id: null,
    time_enter: '',
    time_out: '',
    status: 0,
    sub_total: null,
    fee_service: null,
    total_money: null,
    UserId: null,
    User: '',
    CustomerId: null,
    Customer: '',
    BillDetails: [new BillDetail()]
  };
  billList: Bill[];
  buttonCreate: boolean = false;
  nameCategory: string;
  headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // 'Authorization': this.auth_token
    })
  };
  CreateBill(data): any{
    var bill: Bill = data;
    this.http
      .post('https://localhost:5001/api/BillApi/', JSON.stringify(bill), this.headers)
      .subscribe((result) => {
        console.log(result);
        this.SelectedBill.id = result.id;
      });
  }

  CreateBillDetail(data): any{
    var billDetails: BillDetail[] = data;
    this.http
      .post('https://localhost:5001/api/BillDetailApi/', JSON.stringify(billDetails), this.headers)
      .subscribe((result) => {
        console.log(result);
        this.toarst.success('Created Bill Success');
      });
  }

}
