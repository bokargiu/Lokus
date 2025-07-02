import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { HeadMenuComponent } from './Components/GlobalComponents/head-menu/head-menu.component';
import { AppComponent } from './app.component';
import { CompaniesPageComponent } from './Pages/companies-page/companies-page.component';

const routes: Routes = [
  {path: "", component:HomePageComponent},
  {path: "pesquisa", component:SearchPageComponent},
  {path: "empresas", component:CompaniesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
