import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { SideMenuComponent } from './Components/UserPageComponents/side-menu/side-menu.component';
import { UserHomeComponent } from './Components/UserPageComponents/Cards/UserHome/user-home/user-home.component';
import { UserFeedbackComponent } from './Components/UserPageComponents/Cards/UserFeedback/user-feedback/user-feedback.component';
import { UserMensagensComponent } from './Components/UserPageComponents/Cards/UserMensagens/user-mensagens/user-mensagens.component';
import { UserFavoritesComponent } from './Components/UserPageComponents/Cards/UserFavorites/user-favorites/user-favorites.component';
import { UserCompanyComponent } from './Components/UserPageComponents/Cards/UserCompany/user-company/user-company.component';
import { UserOptionsComponent } from './Components/UserPageComponents/Cards/UserOptions/user-options/user-options.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { HeadMenuComponent } from './Components/GlobalComponents/head-menu/head-menu.component';
import { AppComponent } from './app.component';
import { CompaniesPageComponent } from './Pages/companies-page/companies-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupCompanyPageComponent } from './Pages/signup-company-page/signup-company-page.component';
import { SignupCustomerPageComponent } from './Pages/signup-customer-page/signup-customer-page.component';
import { ResetPasswordPageComponent } from './Pages/reset-password-page/reset-password-page.component';
import { FaqPageComponent } from './Pages/faq-page/faq-page.component';
import { SupportComponent } from './Pages/support/support.component';
import { CarouselComponent } from './Components/ImagesComponents/carousel/carousel.component';
import { SubscriptionsComponent } from './Pages/subscriptions/subscriptions.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { CompanyPageComponent } from './Pages/company-page/company-page.component';
import { CompanyHomeComponent } from './Components/CompanyPageComponents/Cards/CompanyHome/company-home/company-home.component';
import { CompanySpacesComponent } from './Components/CompanyPageComponents/Cards/CompanySpaces/company-spaces/company-spaces.component';
import { CompanyFeedbackComponent } from './Components/CompanyPageComponents/Cards/CompanyFeedback/company-feedback/company-feedback.component';
import { CompanySupportComponent } from './Components/CompanyPageComponents/Cards/CompanySupport/company-support/company-support.component';
import { CompanySettingsComponent } from './Components/CompanyPageComponents/Cards/CompanySettings/company-settings/company-settings.component';
import { CompanyEditProfileComponent } from './Components/CompanyPageComponents/Cards/CompanyEditProfile/company-edit-profile/company-edit-profile.component';
import { AuthGuard } from './Services/authguard.service';
import { StablishmentListPageComponent } from './Components/CompanyPageComponents/stablishment-list-page/stablishment-list-page.component';
import { DashboardLayoutComponent } from './Components/CompanyPageComponents/dashboard-layout/dashboard-layout.component';
import { CardBoxFeedbackComponent } from './Components/card-box-feedback/card-box-feedback.component';

const routes: Routes = [
  // Página inicial
  { path: '', component: HomePageComponent, pathMatch: 'full' },

  // Página do cliente
  {
    path: 'customer',
    component: UserPageComponent,
    canActivate: [AuthGuard],
    data: { role: 'customer' },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: UserHomeComponent },
      { path: 'mensagens', component: UserMensagensComponent },
      { path: 'feedback', component: UserFeedbackComponent },
      { path: 'favorite', component: UserFavoritesComponent },
      { path: 'company', component: UserCompanyComponent },
      { path: 'options', component: UserOptionsComponent },
    ],
  },

  // Painel da empresa (stablishment admin)
  {
    path: 'company',
    canActivate: [AuthGuard],
    data: { role: 'company' },
    children: [
      { path: '', redirectTo: 'stablishments', pathMatch: 'full' },
      { path: 'stablishments', component: StablishmentListPageComponent },

      {
        path: 'dashboard/:stablishmentId',
        component: DashboardLayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: CompanyHomeComponent },
          { path: 'agenda-reservas', component: CompanySpacesComponent },
          { path: 'editar-perfil', component: CompanyEditProfileComponent },
          { path: 'relacionamentos', component: CompanyFeedbackComponent },
          { path: 'suporte', component: CompanySupportComponent },
          { path: 'configuracao', component: CompanySettingsComponent },
        ],
      },
    ],
  },

  // Perfil público de um stablishment
  { path: 'stablishment/:id', component: ProfilePageComponent },

  // Outras páginas
  { path: 'pesquisar', component: SearchPageComponent },
  { path: 'empresa', component: CompaniesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'cadastro-empresa', component: SignupCompanyPageComponent },
  { path: 'cadastro-cliente', component: SignupCustomerPageComponent },
  { path: 'esqueceu-senha', component: ResetPasswordPageComponent },
  { path: 'perguntas', component: FaqPageComponent },
  { path: 'suporte', component: SupportComponent },
  { path: 'planos', component: SubscriptionsComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
