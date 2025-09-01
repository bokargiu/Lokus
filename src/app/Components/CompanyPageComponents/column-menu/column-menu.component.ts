import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-column-menu',
  templateUrl: './column-menu.component.html',
  styleUrl: './column-menu.component.css'
})
export class ColumnMenuComponent {
  @Input() sidenav!: MatSidenav;
}
