import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule} from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { ProductDataComponent } from './admin/product-data/product-data.component';
import { ProductListComponent } from '../app/admin/product-data/product-list/product-list.component';
import { ShopDataCreateComponent } from '../app/admin/shop-data/shop-data-create/shop-data-create.component';
import { ImportProductFormCreateComponent } from '../app/admin/import-product-data/import-product-form-create/import-product-form-create.component';
import { BillFormCreateComponent } from '../app/admin/bill-data/bill-form-create/bill-form-create.component';

import { AuthService } from '../app/services/auth.service';
import { UserService } from './services/user.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: ProductDataComponent,
    canActivate: [AuthService],
    // children: [
    //   {
    //     path: 'product',
    //     component: ProductListComponent,
    //   },
    // ]
  },
  {
    path: 'product',
    component: ProductListComponent,
    canActivate: [AuthService],
  },
  {
    path: 'newshop',
    component: ShopDataCreateComponent,
    canActivate: [AuthService],
  },
  {
    path: 'import',
    component: ImportProductFormCreateComponent,
    canActivate: [AuthService],
  },
  {
    path: 'bill',
    component: BillFormCreateComponent,
    canActivate: [AuthService],
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [
    AuthService,
    UserService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '915729872804-1aifimmj0hevkgeg6hn9bjpmj1gvfmgs.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('301930157885437'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
