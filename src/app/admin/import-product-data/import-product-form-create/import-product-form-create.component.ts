import { Component, OnInit } from '@angular/core';
import { ImportProductService } from '../import-product.service';
import { ProductService } from '../../product-data/product.service';
import { ImportProductDetail } from '../import-product-detail';
import * as $ from 'jquery';

@Component({
  selector: 'app-import-product-form-create',
  templateUrl: './import-product-form-create.component.html',
  styleUrls: ['./import-product-form-create.component.css']
})
export class ImportProductFormCreateComponent implements OnInit {

  constructor(
    public importProductService: ImportProductService,
    public productService: ProductService
  ) {}
  checkEdit: boolean = false;
  indexEdit: number;
  onChange($event) {}
  handleAdd() {
    console.log(
      this.importProductService.SelectedImportProduct.ImportProductDetails
    );
  }
  editImportProduct(e, indexEdit): void {
    this.importProductService.SelectedImportProductDetail = e;
    this.checkEdit = true;
    this.indexEdit = indexEdit;
  }
  deleteImportProduct(e): void {
    this.importProductService.SelectedImportProduct.ImportProductDetails.splice(
      e,
      1
    );
  }
  ngOnInit(): void {
    this.productService.GetProductList();
    console.log('ImportTS: ', this.productService.Productlist);
    $('#exampleFormControlSelect1').select2();
  }
  onSubmit(form) {
    if (!this.checkEdit) {
      this.importProductService.SelectedImportProductDetail.product = this.productService.Productlist[
        this.productService.findByID(
          this.importProductService.SelectedImportProductDetail.product.id
        )
      ];
      this.importProductService.SelectedImportProductDetail.total =
        this.importProductService.SelectedImportProductDetail.quantity *
        this.importProductService.SelectedImportProductDetail.priceImport;
      this.importProductService.SelectedImportProduct.ImportProductDetails.push(
        this.importProductService.SelectedImportProductDetail
      );
      this.importProductService.SelectedImportProductDetail = new ImportProductDetail();
      form.reset();
    } else {
      this.importProductService.SelectedImportProductDetail.product = this.productService.Productlist[
        this.productService.findByID(
          this.importProductService.SelectedImportProductDetail.product.id
        )
      ];

      this.importProductService.SelectedImportProductDetail.total =
        this.importProductService.SelectedImportProductDetail.quantity *
        this.importProductService.SelectedImportProductDetail.priceImport;
      this.importProductService.SelectedImportProduct.ImportProductDetails[
        this.indexEdit
      ] = this.importProductService.SelectedImportProductDetail;
      this.checkEdit = false;
      this.importProductService.SelectedImportProductDetail = new ImportProductDetail();
      form.reset();
    }
  }

}
