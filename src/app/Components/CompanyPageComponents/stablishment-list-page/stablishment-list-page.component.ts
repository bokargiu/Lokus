import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StablishmentService, StablishmentResponseDto } from 'src/app/Services/stablishment.service';


@Component({
  templateUrl: './stablishment-list-page.component.html',
  styleUrl: './stablishment-list-page.component.css'
})
export class StablishmentListPageComponent implements OnInit{
  stablishments: StablishmentResponseDto[] = [];
  loading: boolean = true;

    constructor(
    private stablishmentService: StablishmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.stablishmentService.getMyStablishments().subscribe({
      next: (data) => {
        this.stablishments = data;
        this.loading = false;

        if (this.stablishments.length === 1) {
          this.goToDashboard(this.stablishments[0].id);
        }
      },
      error: (err) => {
        console.error('Erro ao carregar estabelecimentos:', err);
        this.loading = false;
      }
    });
  }

  goToDashboard(id: string): void {
    this.router.navigate([`/company/dashboard/${id}`]);
  }
  

}
