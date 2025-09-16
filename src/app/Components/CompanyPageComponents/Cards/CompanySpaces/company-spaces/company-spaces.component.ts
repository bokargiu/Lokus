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
  stablishmentId: string = ''; 
  spaces: Space[] = [];
  spaces: Space[] = []; 
  loading = true;
  stablishmentId: string | null = null;

  constructor(private spaceService: SpaceService,
    private authService: AuthService
  constructor(
    private spaceService: SpaceService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

    ngOnInit(): void {
    const decoded = this.authService.getDecoded();
  ngOnInit(): void {
    this.loadSpaces();
  }

  private getStablishmentIdFromTokenOrRoute(): string | null {
    // tenta token primeiro
    const decoded: any = this.authService.getDecoded?.();
    if (decoded) {
      this.stablishmentId = decoded.stablishmentId;
      this.loadSpaces();
    } else {
      console.error('Token inválido ou não encontrado');
      // tenta várias chaves comuns (dependendo de como o token foi gerado)
      const idFromToken =
        decoded.stablishmentId ??
        decoded.primarysid ??
        decoded.primarySid ??
        decoded.companyId ?? 
        null;
      if (idFromToken) return idFromToken;
    }
  }

    loadSpaces() {
    this.spaceService.getSpacesByStablishment(this.stablishmentId).subscribe({
      next: (res) => this.spaces = res,
      error: (err) => console.error('Erro ao carregar espaços:', err)
    });
    // fallback para param da rota (se existir)
    const idFromRoute = this.route.snapshot.paramMap.get('stablishmentId') || this.route.snapshot.paramMap.get('id');
    return idFromRoute;
  }

  loadSpaces(): void {
  this.loading = true;
  const decoded: any = this.authService.getDecoded?.();
  const userId = decoded?.primarysid;

  onSpaceAdded(space: Space) {
    this.spaces.push(space);
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