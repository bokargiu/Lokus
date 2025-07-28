import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { HeadMenuComponent } from './Components/GlobalComponents/head-menu/head-menu.component';
import { AppComponent } from './app.component';
import { CompaniesPageComponent } from './Pages/companies-page/companies-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupCompanyPageComponent } from './Pages/signup-company-page/signup-company-page.component';
import { SignupClientPageComponent } from './Pages/signup-client-page/signup-client-page.component';
import { ResetPasswordPageComponent } from './Pages/reset-password-page/reset-password-page.component';
import { FaqPageComponent } from './Pages/faq-page/faq-page.component';

const routes: Routes = [
  {path: "", component:HomePageComponent},
  {path: "pesquisa", component:SearchPageComponent},
  {path: "empresa", component:CompaniesPageComponent},
  {path: "login", component:LoginPageComponent},
  {path: "cadastro-empresa", component:SignupCompanyPageComponent},
  {path: "cadastro-cliente", component:SignupClientPageComponent},
  {path: "esqueceu-senha", component:ResetPasswordPageComponent},
  {path: "perguntas", component:FaqPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
