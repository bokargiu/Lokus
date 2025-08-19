import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CdkMenu } from '@angular/cdk/menu';
import { MenuItem } from 'primeng/api';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent{
  num!: number;
  @Input() sidenav!:MatSidenav
}
