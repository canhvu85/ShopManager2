import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { TypeService } from '../../type-data/type.service';

@Component({
  selector: 'app-product-form-create',
  templateUrl: './product-form-create.component.html',
  styleUrls: ['./product-form-create.component.css']
})
export class ProductFormCreateComponent implements OnInit {

  fileSource: string = null;
  boolFile = false;
  constructor(
    public productService: ProductService,
    public typeService: TypeService
  ) {}
  onChange($event): void {
    console.log(this.productService.SelectedProduct);
    this.productService.SelectedProduct.category.name =
      $event.target.options[$event.target.options.selectedIndex].text;
    this.productService.SelectedProduct.category.id = +this.productService
      .SelectedProduct.categoryId;
  }
  ngOnInit(): void {
    this.typeService.GetTypeList();
  }

  onFileSelected(event): void {
    this.boolFile = true;
    this.productService.SelectedProduct.Files = event.target.files[0];

    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.productService.SelectedProduct.images = reader.result as string;

        this.fileSource = reader.result as string;
      };
    }
  }
  onSubmit(form: NgForm): void {
    form.value.Files = this.productService.SelectedProduct.Files;
    if (form.value.id == null) {
      this.productService.PostProduct(form);
    } else {
      this.productService.PutProduct(form);
    }
  }

}
