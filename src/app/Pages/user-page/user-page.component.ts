import { Component, EventEmitter, NgModule, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { UserPageInterfaceComponent } from 'src/app/Components/UserPageComponents/user-page-interface/user-page-interface.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
}
