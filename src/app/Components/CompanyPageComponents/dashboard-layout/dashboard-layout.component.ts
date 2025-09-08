import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent implements OnInit{
  
  stablishmentId: string = '';

constructor(private route: ActivatedRoute) {}

 ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('stablishmentId');
      if (id) this.stablishmentId = id;
    });
  }
}
