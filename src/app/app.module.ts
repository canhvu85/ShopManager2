import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductDataComponent } from './admin/product-data/product-data.component';

import { SidebarComponent } from '../app/layout/sidebar/sidebar.component';

import { ProductListComponent } from './admin/product-data/product-list/product-list.component';
import { ProductFormCreateComponent } from './admin/product-data/product-form-create/product-form-create.component';
import { TypeListComponent } from '../app/admin/type-data/type-list/type-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgSelect2Module } from 'ng-select2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { NgxPaginationModule } from 'ngx-pagination';
import { ShopDataCreateComponent } from './admin/shop-data/shop-data-create/shop-data-create.component';
import { ImportProductDataComponent } from './admin/import-product-data/import-product-data.component';
import { ImportProductFormCreateComponent } from './admin/import-product-data/import-product-form-create/import-product-form-create.component';
import { BillDataComponent } from './admin/bill-data/bill-data.component';
import { BillFormCreateComponent } from './admin/bill-data/bill-form-create/bill-form-create.component';
import { CustomerDataComponent } from './admin/customer-data/customer-data.component';
import { DialogCustomerComponent } from './admin/bill-data/dialog-customer/dialog-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ProductDataComponent,
    ProductListComponent,
    ProductFormCreateComponent,
    TypeListComponent,
    ShopDataCreateComponent,
    ImportProductDataComponent,
    ImportProductFormCreateComponent,
    BillDataComponent,
    BillFormCreateComponent,
    CustomerDataComponent,
    DialogCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    }),
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgSelect2Module,
    NgbModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
