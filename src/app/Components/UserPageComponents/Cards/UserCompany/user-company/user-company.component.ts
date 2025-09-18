import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrl: './user-company.component.css'
})
export class UserCompanyComponent implements OnInit{
  constructor(private router: Router){}
ngOnInit(): void {
  this.router.navigate(['/empresa'])
}
}
