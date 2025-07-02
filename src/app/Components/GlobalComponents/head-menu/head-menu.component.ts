import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule, CdkMenuTrigger, CdkMenuItem } from '@angular/cdk/menu';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-head-menu',
  standalone: true,
  imports: [    
    CdkMenuModule,
    CdkMenuTrigger,
    CdkMenuItem,
    CommonModule,
    RouterModule],
  templateUrl: './head-menu.component.html',
  styleUrls: ['./head-menu.component.css']
})
export class HeadMenuComponent {

}
