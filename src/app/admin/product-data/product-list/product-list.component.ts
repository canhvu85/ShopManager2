import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  config: any;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.GetProductList();
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      //totalItems: 21,
    };
  }
  editProduct(product: Product): void {
    this.productService.buttonCreate = true;
    this.productService.SelectedProduct = Object.assign({}, product);
    console.log(this.productService.SelectedProduct);
  }
  DeleteProduct(product: Product): void {
    // $ngBootbox.confirm('Delete ' + product.name + '?').then(function () {
    this.productService.DeleteProduct(product);
    // });
  }

  // tslint:disable-next-line: typedef
  pageChanged(event){
    this.config.currentPage = event;
  }
}
