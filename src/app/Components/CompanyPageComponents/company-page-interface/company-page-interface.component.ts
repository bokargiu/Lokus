import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-company-page-interface',
  templateUrl: './company-page-interface.component.html',
  styleUrl: './company-page-interface.component.css'
})
export class CompanyPageInterfaceComponent {
  GETColaborador:boolean = false;
  @Input() sidenav!: MatSidenav;

}
