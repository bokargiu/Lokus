import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Stablishment, StablishmentService } from 'src/app/Services/stablishment.service';

@Component({
  selector: 'app-card-edit-profile',
  templateUrl: './card-edit-profile.component.html',
  styleUrl: './card-edit-profile.component.css'
})
export class CardEditProfileComponent  implements OnInit, OnChanges {
  @Input() stablishmentId!: string;
  stablishment: Stablishment = { id: '', companyName: '', virtualName: '', description: '' };
  loading: boolean = false;

  constructor(private stablishmentService: StablishmentService) {}

  ngOnInit(): void {
    // não precisa mais buscar aqui
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stablishmentId'] && this.stablishmentId) {
      this.stablishmentService.getStablishment(this.stablishmentId).subscribe({
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
    if (!this.stablishment || !this.stablishment.id) return;

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
