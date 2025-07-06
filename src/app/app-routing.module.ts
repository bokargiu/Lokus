import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { SideMenuComponent } from './Components/UserPageComponents/side-menu/side-menu.component';

const routes: Routes = [
  {path: "", component:UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
