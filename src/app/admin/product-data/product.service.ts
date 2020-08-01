import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Product } from '../product-data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private toarst: ToastrService) {}
  SelectedProduct: Product = <Product>{
    id: null,
    name: '',
    priceProduct: null,
    unit: null,
    company: '',
    images: '',
    mass: null,
    categoryId: null,
    Files: null,
    category: { id: null, name: null },
  };
 // auth_token = JSON.parse(localStorage.getItem('userData')).authToken;
  headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // 'Authorization': this.auth_token
    })
  };
  public Productlist: Product[];
  buttonCreate: boolean = false;
  nameCategory: string;
  resetButton(form: NgForm): void {
    if (form != null) {
      form.reset();
    }

    this.SelectedProduct = {
      id: null,
      name: '',
      priceProduct: null,
      unit: null,
      company: '',
      images: '',
      mass: null,
      categoryId: null,
      Files: null,
      category: { id: null, name: null },
    };
  }

  GetProductList(): void {
    this.http
      .get<any>('https://localhost:5001/api/ProductApi', this.headers)
      .subscribe((data) => {
        this.Productlist = data;
        console.log(data);
      });
  }
  PostProduct(form: NgForm): any {
    // tslint:disable-next-line: prefer-const
    const product = form.value;
    console.log(product);
    const formData = new FormData();
    if (product.Files != null){
      formData.append('files', product.Files, product.Files.name);
   }
    formData.append('name', product.name);
    formData.append('unit', product.unit);
    formData.append('mass', product.mass);
    formData.append('categoryId', product.categoryId.toString());
    formData.append('company', product.company);

    this.http
      .post('https://localhost:5001/api/ProductApi/', formData, {
        reportProgress: true
      })
      .subscribe((result) => {
        console.log(result);
        product.id = parseInt(result.id);
        product.images = result.images;
        var category = {
          id: this.SelectedProduct.categoryId,
          name: this.SelectedProduct.category.name,
        };
        product.category = category;
        this.Productlist.unshift(product);
        this.Productlist.pop();
        this.resetButton(form);
        this.buttonCreate = false;
        this.toarst.success('Created Product Success');
      });
  }
  PutProduct(form: NgForm): any {
    var product: Product = form.value;

    const formData = new FormData();
    formData.append('id', product.id.toString());
    if (product.Files != null){
       formData.append('files', product.Files, product.Files.name);
    }
    formData.append('name', product.name);
    formData.append('unit', product.unit);
    formData.append('mass', product.mass);
    formData.append('categoryId', product.categoryId);
    formData.append('company', product.company);

    this.http
      .put('https://localhost:5001/api/ProductApi/' + product.id, formData)
      .subscribe((data) => {
        let index = this.findByID(product.id);
        product.images = data.images;
        this.Productlist[index] = product;
        var category = {
          id: this.SelectedProduct.category.id,
          name: this.SelectedProduct.category.name,
        };
        product.category = category;
        this.resetButton(form);
        this.buttonCreate = false;
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
    for (let i = 0; i < this.Productlist.length; i++) {
      if (this.Productlist[i].id == id) {
        return i;
      }
    }
  }

}
