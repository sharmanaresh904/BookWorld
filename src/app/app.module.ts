import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SellerHomeComponent,
    ShopComponent,
    LoginComponent,
    SellerLoginComponent,
    RegistrationComponent,
    SellerRegistrationComponent,
    CartComponent,
    ProductDetailComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
