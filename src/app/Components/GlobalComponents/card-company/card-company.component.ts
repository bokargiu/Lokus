import { Component } from '@angular/core';

@Component({
  selector: 'app-card-company',
  templateUrl: './card-company.component.html',
  styleUrls: ['./card-company.component.css']
})
export interface CardCompanyComponent {
  company = [
    { nome:"Empresa 1", preco: 80.00 },
    { nome:"Empresa 2", preco: 80.00 },
    { nome:"Empresa 3", preco: 80.00 },
    { nome:"Empresa 4", preco: 80.00 },
    { nome:"Empresa 5", preco: 80.00 },
    { nome:"Empresa 6", preco: 80.00 },
  ]
}

