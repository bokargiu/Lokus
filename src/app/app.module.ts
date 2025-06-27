import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CdkMenuModule } from '@angular/cdk/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { UserPageInterfaceComponent } from './Components/UserPageComponents/user-page-interface/user-page-interface.component';
import { SideMenuComponent } from './Components/UserPageComponents/side-menu/side-menu.component';
import { SearchAreaComponent } from './Components/UserPageComponents/search-area/search-area.component';
import { LocalizeNearMapComponent } from './Components/UserPageComponents/localize-near-map/localize-near-map.component';
import { ButtomAdBarComponent } from './Components/UserPageComponents/buttom-ad-bar/buttom-ad-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserPageInterfaceComponent,
    SideMenuComponent,
    SearchAreaComponent,
    LocalizeNearMapComponent,
    ButtomAdBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CdkMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
