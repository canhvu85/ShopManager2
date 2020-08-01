import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop-data-create',
  templateUrl: './shop-data-create.component.html',
  styleUrls: ['./shop-data-create.component.css']
})
export class ShopDataCreateComponent implements OnInit {

  constructor(
    public shopService: ShopService,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
      this.shopService.PutShop(form);
      form.reset();
  }

}
