import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule, CdkMenuTrigger, CdkMenuItem } from '@angular/cdk/menu';

@Component({
  selector: 'app-head-menu',
  standalone: true,
  imports: [    
    CdkMenuModule,
    CdkMenuTrigger,
    CdkMenuItem,
    CommonModule],
  templateUrl: './head-menu.component.html',
  styleUrls: ['./head-menu.component.css']
})
export class HeadMenuComponent {

}
