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
import { AccordionModule } from 'primeng/accordion';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { GalleriaModule } from 'primeng/galleria';

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
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { FootingComponent } from './Components/GlobalComponents/footing/footing.component';
import { HeadMenuComponent } from './Components/GlobalComponents/head-menu/head-menu.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { CardCompanyComponent } from './Components/GlobalComponents/card-company/card-company.component';
import { CompaniesPageComponent } from './Pages/companies-page/companies-page.component';
import { SignupCompanyPageComponent } from './Pages/signup-company-page/signup-company-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SlidePicturesComponent } from './Components/GlobalComponents/slide-pictures/slide-pictures.component';
import { ResetPasswordPageComponent } from './Pages/reset-password-page/reset-password-page.component';
import { FaqPageComponent } from './Pages/faq-page/faq-page.component';
import { SignupCostumerPageComponent } from './Pages/signup-customer-page/signup-customer-page.component';

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
    HomePageComponent,
    SearchPageComponent,
    CardCompanyComponent,
    CompaniesPageComponent,
    SignupCompanyPageComponent,
    LoginPageComponent,
    SlidePicturesComponent,
    HeadMenuComponent,
    ResetPasswordPageComponent,
    FaqPageComponent,
    SignupCostumerPageComponent
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
    ScrollingModule,
    GalleriaModule,
    FootingComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
