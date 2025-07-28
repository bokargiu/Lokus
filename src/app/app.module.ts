import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatIconModule } from '@angular/material/icon';
import { GalleriaModule } from 'primeng/galleria';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { FootingComponent } from './Components/GlobalComponents/footing/footing.component';
import { HeadMenuComponent } from './Components/GlobalComponents/head-menu/head-menu.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { CardCompanyComponent } from './Components/GlobalComponents/card-company/card-company.component';
import { CompaniesPageComponent } from './Pages/companies-page/companies-page.component';
import { SignupCompanyPageComponent } from './Pages/signup-company-page/signup-company-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupClientPageComponent } from './Pages/signup-client-page/signup-client-page.component';
import { SlidePicturesComponent } from './Components/GlobalComponents/slide-pictures/slide-pictures.component';
import { ResetPasswordPageComponent } from './Pages/reset-password-page/reset-password-page.component';
import { FaqPageComponent } from './Pages/faq-page/faq-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    CardCompanyComponent,
    CompaniesPageComponent,
    SignupCompanyPageComponent,
    LoginPageComponent,
    SignupClientPageComponent,
    SlidePicturesComponent,
    HeadMenuComponent,
    ResetPasswordPageComponent,
    FaqPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CdkMenuModule,
    FootingComponent,
    MatIconModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
