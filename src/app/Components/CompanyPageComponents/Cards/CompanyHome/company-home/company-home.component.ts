import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrl: './company-home.component.css'
})
export class CompanyHomeComponent {

 private stablishmentId: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // pega o :stablishmentId da rota pai (dashboard)
    this.stablishmentId = this.route.parent?.snapshot.paramMap.get('stablishmentId') ?? null;
  }

  goProfile() {
    if (this.stablishmentId) {
      // redireciona para o perfil público do stablishment
      this.router.navigate(['/stablishment', this.stablishmentId]);
    }
  }
}
