import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CdkMenuModule } from '@angular/cdk/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { FootingComponent } from './Components/GlobalComponents/footing/footing.component';
import { HeadMenuComponent } from './Components/GlobalComponents/head-menu/head-menu.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { ImagesComponent } from './Components/GlobalComponents/images/images.component';
import { CardCompanyComponent } from './Components/GlobalComponents/card-company/card-company.component';
import { CompaniesPageComponent } from './Pages/companies-page/companies-page.component';
import { SignupCompanyPageComponent } from './Pages/signup-company-page/signup-company-page.component';
import { SignupUserPageComponent } from './Pages/signup-user-page/signup-user-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    ImagesComponent,
    CardCompanyComponent,
    CompaniesPageComponent,
    SignupCompanyPageComponent,
    SignupUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CdkMenuModule,
    HeadMenuComponent,
    FootingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
