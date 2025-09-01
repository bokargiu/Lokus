import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-row',
  templateUrl: './menu-row.component.html',
  styleUrl: './menu-row.component.css'
})
export class MenuRowComponent {
@Input() sidenav!: MatSidenav;
}
