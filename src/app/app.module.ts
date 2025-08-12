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
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion'

import { MatButtonModule } from '@angular/material/button';
import { MenuModule } from 'primeng/menu';
import { CarouselModule } from 'primeng/carousel';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { UserPageInterfaceComponent } from './Components/UserPageComponents/user-page-interface/user-page-interface.component';
import { SideMenuComponent } from './Components/UserPageComponents/side-menu/side-menu.component';
import { SearchAreaComponent } from './Components/UserPageComponents/search-area/search-area.component';
import { LocalizeNearMapComponent } from './Components/UserPageComponents/Cards/UserHome/localize-near-map/localize-near-map.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { MenuBarComponent } from './Components/UserPageComponents/menu-bar/menu-bar.component';
import { UserBalanceCardComponent } from "./Components/UserPageComponents/Cards/UserHome/user-balance-card/user-balance-card.component";
import { UserHomeComponent } from "./Components/UserPageComponents/Cards/UserHome/user-home/user-home.component";
import { CardCompanyForUserPageComponent } from "./Components/UserPageComponents/Cards/UserHome/card-company-for-user-page/card-company-for-user-page.component";
import { UserCardHomeComponent } from "./Components/UserPageComponents/Cards/UserHome/user-card-home/user-card-home.component";
import { UserCarouselHomeComponent } from './Components/UserPageComponents/Cards/UserHome/user-carousel-home/user-carousel-home.component';
import { UserFavoritesComponent } from './Components/UserPageComponents/Cards/UserFavorites/user-favorites/user-favorites.component';
import { UserFeedbackComponent } from './Components/UserPageComponents/Cards/UserFeedback/user-feedback/user-feedback.component';
import { UserMensagensComponent } from './Components/UserPageComponents/Cards/UserMensagens/user-mensagens/user-mensagens.component';
import { UserCartComponent } from './Components/UserPageComponents/Cards/UserCart/user-cart/user-cart.component';
import { UserCompanyComponent } from './Components/UserPageComponents/Cards/UserCompany/user-company/user-company.component';
import { UserOptionsComponent } from './Components/UserPageComponents/Cards/UserOptions/user-options/user-options.component';


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
    UserCardHomeComponent,
    UserCarouselHomeComponent,
    UserHomeComponent,
    UserFavoritesComponent,
    UserFeedbackComponent,
    UserMensagensComponent,
    UserCartComponent,
    UserCompanyComponent,
    UserOptionsComponent,
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
    MatGridListModule,
    RouterModule,
    AccordionModule,
],
  exports: [
    UserPageInterfaceComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
