import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon'
import { CdkMenuModule } from '@angular/cdk/menu';
import { GalleriaModule } from 'primeng/galleria';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoworkinPageComponent } from './Pages/coworkin-page/coworkin-page.component';
import { CarouselComponent } from "src/app/Components/GlobalComponents/carousel/carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    CoworkinPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CdkMenuModule,
    MatIconModule,
    GalleriaModule,
    CarouselComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
