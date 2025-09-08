import { Component, OnInit } from '@angular/core';
import { Stablishment, StablishmentService } from 'src/app/Services/stablishment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-edit-profile',
  templateUrl: './card-edit-profile.component.html',
  styleUrl: './card-edit-profile.component.css'
})
export class CardEditProfileComponent  implements OnInit {
  stablishmentId: string = '';
  stablishment: Stablishment = { id: '', companyName: '', virtualName: '', description: '' };
  loading: boolean = false;

  constructor(
    private stablishmentService: StablishmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const stablishmentId = this.route.snapshot.paramMap.get('id');
    if (stablishmentId) {
      this.stablishmentService.getStablishment(stablishmentId).subscribe({
        next: (data) => {
          this.stablishment = data;
        },
        error: (err) => {
          console.error('Erro ao carregar o estabelecimento', err);
        }
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
      error: (err) => {
        console.error('Erro ao salvar alterações', err);
        alert('Erro ao salvar alterações!');
        this.loading = false;
      }
    });
  }
}
