import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  standalone: false,
  selector: 'app-user-page-interface',
  templateUrl: './user-page-interface.component.html',
  styleUrls: ['./user-page-interface.component.css']
})
export class UserPageInterfaceComponent {
GETeColaborador:boolean = false;
@Input() sidenav!: MatSidenav;
}
