import { Component, OnInit } from '@angular/core';
import { Space, SpaceService } from 'src/app/Services/space.service';
import { AuthService } from 'src/app/Services/auth.service';

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

  constructor(private spaceService: SpaceService,
    private authService: AuthService
  ) {}

    ngOnInit(): void {
    const decoded = this.authService.getDecoded();
    if (decoded) {
      this.stablishmentId = decoded.stablishmentId;
      this.loadSpaces();
    } else {
      console.error('Token inválido ou não encontrado');
    }
  }

    loadSpaces() {
    this.spaceService.getSpacesByStablishment(this.stablishmentId).subscribe({
      next: (res) => this.spaces = res,
      error: (err) => console.error('Erro ao carregar espaços:', err)
    });
  }


  onSpaceAdded(space: Space) {
    this.spaces.push(space);
  }

}
