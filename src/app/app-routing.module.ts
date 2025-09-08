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

const routes: Routes = [
  // Página inicial 
  { path: '', component: HomePageComponent, pathMatch: 'full' },

  // Página do customer
  {
    path: 'customer',
    component: UserPageComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: UserHomeComponent },
      { path: 'mensagens', component: UserMensagensComponent },
      { path: 'feedback', component: UserFeedbackComponent },
      { path: 'favorite', component: UserFavoritesComponent },
      { path: 'company', component: UserCompanyComponent },
      { path: 'options', component: UserOptionsComponent },
    ],
  },

  // Outras páginas
  { path: 'pesquisa', component: SearchPageComponent },
  { path: 'empresa', component: CompaniesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'cadastro-empresa', component: SignupCompanyPageComponent },
  { path: 'cadastro-cliente', component: SignupCustomerPageComponent },
  { path: 'esqueceu-senha', component: ResetPasswordPageComponent },
  { path: 'perguntas', component: FaqPageComponent },

  // Rota coringa (caso digite algo inexistente)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
