import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-row',
  templateUrl: './menu-row.component.html',
  styleUrls: ['./menu-row.component.css']
})
export class MenuRowComponent  {
@Input() sidenav!: MatSidenav;

}

