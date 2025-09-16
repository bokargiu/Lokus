import { Component,EventEmitter, Output  } from '@angular/core';
import { Space, SpaceService } from 'src/app/Services/space.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { SpaceCreateDto } from 'src/app/Dto\'s/spaceDto';

@Component({
  selector: 'app-card-add-space',
  templateUrl: './card-add-space.component.html',

})
export class CardAddSpaceComponent {
   @Output() spaceAdded = new EventEmitter<any>();

  form = this.fb.group({
    name: ['', Validators.required],
    capacity: [1, [Validators.required, Validators.min(1)]],
    description: [''],
    price: [1, [Validators.required, Validators.min(1)]],
    priceEnum: ['PorHora', Validators.required]
  });

  constructor(private fb: FormBuilder, private spaceService: SpaceService, private authService: AuthService) {}

  submit() {
  if (this.form.invalid) return;

  const fv = this.form.value;
  const decoded: any = this.authService.getDecoded();
  const userId = decoded?.primarysid;

  if (!userId) {
    alert('UserId não encontrado no token.');
    return;
  }

  // Buscar estabelecimentos pelo userId
  this.spaceService.getStablishmentsByUser(userId).subscribe({
    next: (stablishments: any[]) => {
      if (!stablishments || stablishments.length === 0) {
        alert('Nenhum estabelecimento encontrado para este usuário.');
        return;
      }

      const stablishmentId = stablishments.length === 1 
        ? stablishments[0].id 
        : null; // se tiver mais de um, você pode pedir seleção depois

      if (!stablishmentId) {
        alert('Mais de um estabelecimento encontrado. Selecione qual usar.');
        return;
      }

      const priceEnumMap: { [key: string]: number } = { 'PorHora': 0, 'PorDia': 1 };
      const payload: SpaceCreateDto = {
        stablishmentId,
        name: String(fv.name),
        capacity: Number(fv.capacity),
        description: fv.description ?? undefined,
        price: Number(fv.price),
        priceEnum: priceEnumMap[fv.priceEnum ?? 'PorHora']
      };

      this.spaceService.addSpace(payload).subscribe({
        next: res => {
          this.spaceAdded.emit(res);
          this.form.reset();
        },
        error: err => {
          console.error('Erro ao salvar espaço', err);
          alert('Erro ao salvar: ' + (err?.message ?? err?.statusText ?? 'desconhecido'));
        }
      });
    },
    error: err => {
      console.error('Erro ao buscar estabelecimentos', err);
      alert('Não foi possível buscar os estabelecimentos: ' + (err?.message ?? err?.statusText ?? 'desconhecido'));
    }
  });
}


}