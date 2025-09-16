import { Component, OnInit, Input } from '@angular/core';
import { Stablishment, StablishmentService } from 'src/app/Services/stablishment.service';

@Component({
  selector: 'app-card-edit-profile',
  templateUrl: './card-edit-profile.component.html',
  styleUrl: './card-edit-profile.component.css'
})
export class CardEditProfileComponent  implements OnInit {
  @Input() stablishmentId!: string;
  stablishment: Stablishment | null = null;
  loading: boolean = false;

  constructor(private stablishmentService: StablishmentService) {}

  ngOnInit(): void {
    if (this.stablishmentId) {
      this.loadStablishment();
    }
  }

  private loadStablishment(): void {
    this.stablishmentService.getStablishment(this.stablishmentId).subscribe({
      next: (data) => {
        console.log('Establishment carregado:', data);
        this.stablishment = data;
      },
      error: (err) => {
        console.error('Erro ao carregar o estabelecimento', err);
      }
    });
  }

  saveChanges(): void {
    if (!this.stablishment || !this.stablishment.id) return;

    this.loading = true;

    const payload = {
      virtualName: this.stablishment.virtualName,
      description: this.stablishment.description
    };

    console.log('Payload enviado:', payload);

    this.stablishmentService.updateStablishment(this.stablishment.id, payload).subscribe({
      next: (res) => {
        console.log('Resposta do back:', res);
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
