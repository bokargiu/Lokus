import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/Services/rate.service';

@Component({
  selector: 'app-card-rate',
  templateUrl: './card-rate.component.html',
  styleUrl: './card-rate.component.css'
})
export class CardRateComponent {
  averageRate: number = 0;   // média da nota
  companyId: number = 1;     // id da empresa (pode vir de login/contexto depois)

  constructor(private rateService: RateService) {}

  // ngOnInit(): void {
  //   this.loadRate();
  // }

  // loadRate() {
  //   this.rateService.getAverageRate(this.companyId).subscribe({
  //     next: (rate) => this.averageRate = rate,
  //     error: (err) => console.error('Erro ao carregar avaliação:', err)
  //   });
  }

