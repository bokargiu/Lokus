import { Component, OnInit } from '@angular/core';
import { Space, SpaceService } from 'src/app/Services/space.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ActivatedRoute } from '@angular/router';

interface DecodedToken {
  stablishmentId: string;
  exp: number;
  iat: number;
}

@Component({
  selector: 'app-company-spaces',
  templateUrl: './company-spaces.component.html',
  styleUrl: './company-spaces.component.css'
})
export class CompanySpacesComponent implements OnInit{
  spaces: Space[] = []; 
  loading = true;
  stablishmentId: string | null = null;

  constructor(
    private spaceService: SpaceService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadSpaces();
  }

  private getStablishmentIdFromTokenOrRoute(): string | null {
    // tenta token primeiro
    const decoded: any = this.authService.getDecoded?.();
    if (decoded) {
      // tenta várias chaves comuns (dependendo de como o token foi gerado)
      const idFromToken =
        decoded.stablishmentId ??
        decoded.primarysid ??
        decoded.primarySid ??
        decoded.companyId ?? 
        null;
      if (idFromToken) return idFromToken;
    }

    // fallback para param da rota (se existir)
    const idFromRoute = this.route.snapshot.paramMap.get('stablishmentId') || this.route.snapshot.paramMap.get('id');
    return idFromRoute;
  }

  loadSpaces(): void {
  this.loading = true;
  const decoded: any = this.authService.getDecoded?.();
  const userId = decoded?.primarysid;

  if (!userId) {
    console.error('UserId não encontrado no token — abortando requisição.');
    this.loading = false;
    return;
  }

  this.spaceService.getSpacesByUser(userId).subscribe({
    next: res => {
      console.log("Espaços recebidos =>", res);
      this.spaces = res || [];
      this.loading = false;
    },
    error: err => {
      console.error('Erro ao carregar espaços:', err);
      this.loading = false;
    }
  });
}

}