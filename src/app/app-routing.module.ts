import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { SideMenuComponent } from './Components/UserPageComponents/side-menu/side-menu.component';
import { UserHomeComponent } from './Components/UserPageComponents/Cards/UserHome/user-home/user-home.component';
import { UserFeedbackComponent } from './Components/UserPageComponents/Cards/UserFeedback/user-feedback/user-feedback.component';
import { UserMensagensComponent } from './Components/UserPageComponents/Cards/UserMensagens/user-mensagens/user-mensagens.component';
import { UserFavoritesComponent } from './Components/UserPageComponents/Cards/UserFavorites/user-favorites/user-favorites.component';
import { UserCartComponent } from './Components/UserPageComponents/Cards/UserCart/user-cart/user-cart.component';
import { UserCompanyComponent } from './Components/UserPageComponents/Cards/UserCompany/user-company/user-company.component';
import { UserOptionsComponent } from './Components/UserPageComponents/Cards/UserOptions/user-options/user-options.component';

const routes: Routes = [
  {path: '', redirectTo: 'customer/home', pathMatch: 'full'},
  {
    path: 'customer', 
    component:UserPageComponent,
    children: [{
      path: 'home',
      component: UserHomeComponent
    },{
      path: 'mensagens',
      component: UserMensagensComponent
    },{
      path: 'feedback',
      component: UserFeedbackComponent
    },{
      path: 'favorite',
      component: UserFavoritesComponent
    },{
      path: 'cart',
      component: UserCartComponent
    },{
      path: 'company',
      component: UserCompanyComponent
    },{
      path: 'options',
      component: UserOptionsComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
