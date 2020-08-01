import { Injectable } from '@angular/core';
import { Product } from '../product-data/product';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { ImportProduct } from './import-product';
import { ImportProductDetail } from './import-product-detail';

@Injectable({
  providedIn: 'root'
})
export class ImportProductService {

  constructor(private http: HttpClient, private toarst: ToastrService) {}
  SelectedImportProductDetail: ImportProductDetail = new ImportProductDetail();
  SelectedImportProduct: ImportProduct = {
    id: null,
    time_enter: '',
    status: false,
    sub_total: null,
    total_money: null,
    UserId: '',
    User: '',
    ImportProductDetails: [],
  };
  public importProductDetailList: ImportProductDetail[];
  ImportProductlist: ImportProduct[];
  buttonCreate: boolean = false;
  nameCategory: string;
  resetButton(form: NgForm): void {
    if (form != null) {
      form.reset();
    }

    this.SelectedImportProduct = {
      id: null,
      time_enter: '',
      status: false,
      sub_total: null,
      total_money: null,
      UserId: '',
      User: '',
      ImportProductDetails: [new ImportProductDetail()],
    };
  }

  // vu
  GetImportProductDetailListByProductId(product_id: number): any {
  this.http
      .get<any>('https://localhost:5001/api/ImportProductDetailApi/product/?product_id=' + product_id)
      .subscribe((data) => {
        console.log(data);
        this.importProductDetailList = data;
        return data;
      });
  }
  //
  GetProductList(): void {
    this.http
      .get<any>('https://localhost:5001/api/ImportProductApi')
      .subscribe((data) => {
        this.ImportProductlist = data;
        console.log(data);
      });
  }
  PostProduct(form: NgForm): any {
    // tslint:disable-next-line: prefer-const
    var data = form.value;

    this.http
      .post('https://localhost:5001/api/ProductApi/', data, {
        reportProgress: true,
      })
      .subscribe((result) => {
        console.log(result);

        this.ImportProductlist.unshift(data);
        this.ImportProductlist.pop();
        this.resetButton(form);
        this.buttonCreate = false;
        this.toarst.success('Created Product Success');
      });
  }
  PutProduct(form: NgForm): any {
    var product: Product = form.value;

    const formData = new FormData();
    formData.append('id', product.id.toString());
    formData.append('files', product.Files, product.Files.name);
    formData.append('name', product.name);
    formData.append('unit', product.unit);
    formData.append('mass', product.mass);
    formData.append('categoryId', product.categoryId);
    formData.append('company', product.company);

    this.http
      .put('https://localhost:5001/api/ProductApi/' + product.id, formData)
      .subscribe((data) => {
        let index = this.findByID(product.id);

        this.toarst.success('Updated Product Success');
      });
  }
  DeleteProduct(product: Product): any {
    this.http
      .put(
        'https://localhost:5001/Rooms/api/ProductsApi/DeleteSoft/' + product.id,
        Product
      )
      .subscribe((data) => {
        this.toarst.warning('Deleted Product Success', 'Product');
        this.GetProductList();
      });
  }
  findByID(id): any {
    for (let i = 0; i < this.ImportProductlist.length; i++) {
      if (this.ImportProductlist[i].id == id) {
        return i;
      }
    }
  }
}
