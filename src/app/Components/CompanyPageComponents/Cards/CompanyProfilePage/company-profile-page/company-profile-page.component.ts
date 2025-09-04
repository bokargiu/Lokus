import { Component, OnInit } from '@angular/core';
import { ImagesProfileService } from 'src/app/Services/imagesprofile.service';
import { Stablishment, StablishmentService } from 'src/app/Services/stablishment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-profile-page',
  templateUrl: './company-profile-page.component.html',
  styleUrl: './company-profile-page.component.css'
})

export class CompanyProfileComponent implements OnInit{
  stablishment!: Stablishment;
  loading: boolean = false;

  constructor(private stablishmentService: StablishmentService, private route:ActivatedRoute){}

  ngOnInit(): void {
    const stablishmentId = this.route.snapshot.paramMap.get('id');
    if (stablishmentId) {
      this.stablishmentService.getStablishment(stablishmentId). subscribe(data => {
        this.stablishment = data;
      });
    }
  }

  saveChanges(): void {
    if (!this.stablishment) return;

    this.loading = true;
    this.stablishmentService.updateStablishment(this.stablishment.id, {
      virtualName: this.stablishment.virtualName,
      description: this.stablishment.description
    }).subscribe({
      next: () => {
        alert('Alterações salvas com sucesso!');
        this.loading = false;
      },
      error: () => {
        alert('Erro ao salvar alterações!');
        this.loading = false;
      } 
    });
  }
}
