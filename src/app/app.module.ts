import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';

import { MatIconButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';
import { Scroll } from '@angular/router';

import { ViewChild } from '@angular/core';

import { ButtonModule} from 'primeng/button';
import { CardModule} from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule} from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';


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
import { CompaniesPageComponent } from './Pages/companies-page/companies-page.component';
import { SignupCompanyPageComponent } from './Pages/signup-company-page/signup-company-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { ResetPasswordPageComponent } from './Pages/reset-password-page/reset-password-page.component';
import { FaqPageComponent } from './Pages/faq-page/faq-page.component';
import { SignupCustomerPageComponent } from './Pages/signup-customer-page/signup-customer-page.component';
import { SupportComponent } from './Pages/support/support.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { CarouselComponent } from './Components/ImagesComponents/carousel/carousel.component';
import { SubscriptionsComponent } from './Pages/subscriptions/subscriptions.component';
import { CardSubscriptionComponent } from './Components/card-subscription/card-subscription.component';
import { CardCompanyComponent } from './Components/card-company/card-company.component';


import { CompanyPageInterfaceComponent } from './Components/CompanyPageComponents/company-page-interface/company-page-interface.component';
import { ColumnMenuComponent } from './Components/CompanyPageComponents/column-menu/column-menu.component';
import { MenuRowComponent } from './Components/CompanyPageComponents/menu-row/menu-row.component';
import { CompanyPageComponent } from './Pages/company-page/company-page.component';
import { CompanyHomeComponent } from './Components/CompanyPageComponents/Cards/CompanyHome/company-home/company-home.component';
import { GraphicsComponent } from './Components/CompanyPageComponents/Cards/CompanyHome/graphics/graphics.component';
import { CompanyManagementComponent } from './Components/CompanyPageComponents/Cards/CompanyManagement/company-management/company-management.component';
import { CompanyProfilePageComponent } from './Components/CompanyPageComponents/Cards/CompanyProfilePage/company-profile-page/company-profile-page.component';
import { CompanySettingsComponent } from './Components/CompanyPageComponents/Cards/CompanySettings/company-settings/company-settings.component';
import { CompanySupportComponent } from './Components/CompanyPageComponents/Cards/CompanySupport/company-support/company-support.component';
import { CompanyFeedbackComponent } from './Components/CompanyPageComponents/Cards/CompanyFeedback/company-feedback/company-feedback.component';
import { CompanyUploadImagesComponent } from './Components/CompanyPageComponents/Cards/CompanyProfilePage/company-upload-images/company-upload-images.component';
import { CompanyReservationsComponent } from './Components/CompanyPageComponents/Cards/CompanyManagement/company-reservations/company-reservations.component';
import { CardHoursComponent } from './Components/CompanyPageComponents/Cards/CompanyHome/card-hours/card-hours.component';
import { CardRateComponent } from './Components/CompanyPageComponents/Cards/CompanyHome/card-rate/card-rate.component';
import { RateService } from './Services/rate.service';

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
    CompaniesPageComponent,
    SignupCompanyPageComponent,
    LoginPageComponent,
    HeadMenuComponent,
    ResetPasswordPageComponent,
    FaqPageComponent,
    SignupCustomerPageComponent,
    FootingComponent,
    SupportComponent,
    ProfilePageComponent,
    CarouselComponent,
    SubscriptionsComponent,
    CardSubscriptionComponent,
    CardCompanyComponent,

    CompanyPageInterfaceComponent,
    ColumnMenuComponent,
    MenuRowComponent,
    CompanyPageComponent,
    CompanyHomeComponent,
    GraphicsComponent,
    CompanyManagementComponent,
    CompanyProfilePageComponent,
    CompanySettingsComponent,
    CompanySupportComponent,
    CompanyFeedbackComponent,
    CompanyUploadImagesComponent,
    CompanyReservationsComponent,
    CardHoursComponent,
    CardRateComponent,

  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  AppRoutingModule,
  HttpClientModule,
  CommonModule,
  RouterModule,
  CdkMenuModule,
  ScrollingModule,

  // Angular Material
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatGridListModule,
  MatCardModule,
  MatBadgeModule,
  MatToolbarModule,
  MatMenuModule,

  // PrimeNG
  ButtonModule,
  CardModule,
  DividerModule,
  AccordionModule,
  MenuModule,
  GalleriaModule,
  CarouselModule,
  TabViewModule
],

  providers: [MatIconRegistry],

  bootstrap: [AppComponent]
})
export class AppModule { }
