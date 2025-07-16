import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './Pages/subscription/subscription.component';
import { SubscriptionCompanyComponent } from './Pages/subscription-company/subscription-company.component';

const routes: Routes = [
  {path:"", component:SubscriptionComponent},
  {path:"", component:SubscriptionCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
