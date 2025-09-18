import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stablishment, StablishmentService } from 'src/app/Services/stablishment.service';

@Component({
  selector: 'app-card-company',

  templateUrl: './card-company.component.html',
  styleUrl: './card-company.component.css'
})
export class CardCompanyComponent implements OnInit{

  stablishments: Stablishment[] = [];
  
  // companyCard = [   <- para o mock funcionar
  //   { nome:"name", id: 1 },
  //   { nome:"name", id: 2 },
  //   { nome:"name", id: 3 },
  // ]

  constructor(private router: Router, private stablishmentService: StablishmentService) {}

   ngOnInit(): void {
    // Pega todos os stablishments do backend
    this.stablishmentService.getByCompany('ALL').subscribe(
      (data) => {
        this.stablishments = data;
      },
      (err) => console.error('Erro ao buscar stablishments', err)
    );
  }

  goToProfile(id: string) {
    this.router.navigate(['/stablishment', id]);
  }
}
