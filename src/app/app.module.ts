import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MatBadgeModule } from '@angular/material/badge';

import { MatButtonModule } from '@angular/material/button';
import { MenuModule } from 'primeng/menu';
import { CarouselModule } from 'primeng/carousel';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPageInterfaceComponent } from './Components/UserPageComponents/user-page-interface/user-page-interface.component';
import { SideMenuComponent } from './Components/UserPageComponents/side-menu/side-menu.component';
import { SearchAreaComponent } from './Components/UserPageComponents/search-area/search-area.component';
import { LocalizeNearMapComponent } from './Components/UserPageComponents/localize-near-map/localize-near-map.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { MenuBarComponent } from './Components/UserPageComponents/menu-bar/menu-bar.component';
import { UserBalanceCardComponent } from "./Components/UserPageComponents/Cards/UserPageHome/user-balance-card/user-balance-card.component";
import { UserHomeComponent } from "./Components/UserPageComponents/Cards/UserPageHome/user-home/user-home.component";
import { CardCompanyForUserPageComponent } from "./Components/UserPageComponents/Cards/UserPageHome/card-company-for-user-page/card-company-for-user-page.component";


@NgModule({
  declarations: [
    AppComponent,
    UserPageInterfaceComponent,
    SideMenuComponent,
    SearchAreaComponent,
    LocalizeNearMapComponent,
    UserPageComponent,
    MenuBarComponent,
    UserHomeComponent,
    CardCompanyForUserPageComponent,
    UserBalanceCardComponent,
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
    MatSidenavModule,
    MatButtonModule,
    ButtonModule,
    MenuModule,
    CardModule,
    DividerModule,
    MatBadgeModule,
    CarouselModule,
    MatCardModule,
],
  exports: [
    UserPageInterfaceComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
