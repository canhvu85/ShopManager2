import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogCustomerComponent } from '../dialog-customer/dialog-customer.component';
import { Customer } from '../../customer-data/customer';
import { CustomerServiceService } from '../../customer-data/customer-service.service';
import { BillServiceService } from '../bill-service.service';
import { ProductService } from '../../product-data/product.service';
import { ImportProductDetail } from '../../import-product-data/import-product-detail';
import { ImportProductService } from '../../import-product-data/import-product.service';
import { BillDetail } from '../bill-detail';
import * as $ from 'jquery';
import { Product } from '../../product-data/product';
import { NgForm } from '@angular/forms';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-bill-form-create',
  templateUrl: './bill-form-create.component.html',
  styleUrls: ['./bill-form-create.component.css']
})
export class BillFormCreateComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public customerService: CustomerServiceService,
              public billService: BillServiceService,
              public productService: ProductService,
              public importProductService: ImportProductService
              ) { }

  //importProductDetailList: ImportProductDetail[];
  importProductDetail: ImportProductDetail;
  product;
  checkEdit: boolean = false;
  indexEdit: number;

  billDetail = {
    //id: null,
    price: null,
    quantity: null,
    discount: null,
    total: null,
    status: null,
    importProductDetailId: null,
  //  importProductDetail: ImportProductDetail = new ImportProductDetail(),
    billId: null
   // bill: Bill
  }

ngOnInit(): void {
    this.customerService.CustomersList();
    this.productService.GetProductList();
  //  console.log('ImportTS: ', this.productService.Productlist);
    $('#exampleFormControlSelect1').select2();
  }
openDialog(): void {
   let customer: Customer = {
      // id: null,
      name: '',
      address: '',
      email: '',
      phone: null,
      UserId: null,
     // User: ''
     } as Customer;
   const dialogRef = this.dialog.open(DialogCustomerComponent, {
      width: '250px',
      data: customer
    });

   dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result.name;
      this.customerService.CreateCustomer(result);
    });
  }

onChange($event) {
    this.importProductService.GetImportProductDetailListByProductId(this.product);
  }
onChangeIPD($event) {
  this.billDetail.importProductDetailId = this.billService.SelectedBillDetail.importProductDetailId;
  this.billDetail.price = $event.target.options[$event.target.options.selectedIndex].text;
}
handleAdd() {
    // console.log(
    //   this.importProductService.SelectedImportProduct.ImportProductDetails
    // );
  }
editImportProduct(e, indexEdit): void {
    // this.importProductService.SelectedImportProductDetail = e;
    // this.checkEdit = true;
    // this.indexEdit = indexEdit;
  }
deleteImportProduct(e): void {
    // this.importProductService.SelectedImportProduct.ImportProductDetails.splice(
    //   e,
    //   1
    // );
  }

onSubmit(form: NgForm) {
    if (!this.checkEdit) {
    this.billDetail.quantity = this.billService.SelectedBillDetail.quantity;
    this.billDetail.discount = form.value.discount;
    this.billDetail.total = (this.billDetail.price - this.billDetail.discount) * this.billDetail.quantity;
   // this.billDetail.price = form.text.im;
    console.log(this.billDetail.importProductDetailId);
    console.log(this.billDetail.price);
    console.log(this.billDetail.total);
    form.reset();
    } else {


      form.reset();
    }
  }


}
