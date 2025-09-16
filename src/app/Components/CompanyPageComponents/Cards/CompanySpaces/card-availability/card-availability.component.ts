import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Availability, AvailabilityService } from 'src/app/Services/availability.service';
import { Space, SpaceService } from 'src/app/Services/space.service';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-card-availability',
  templateUrl: './card-availability.component.html',
  styleUrl: './card-availability.component.css'
})
export class CardAvailabilityComponent implements OnInit {
  @Input() spaces: Space[] = [];
  form: FormGroup;
  availabilities: Availability[] = [];

  diasSemana = [
    { nome: 'Domingo', valor: 0 },
    { nome: 'Segunda-feira', valor: 1 },
    { nome: 'Terça-feira', valor: 2 },
    { nome: 'Quarta-feira', valor: 3 },
    { nome: 'Quinta-feira', valor: 4 },
    { nome: 'Sexta-feira', valor: 5 },
    { nome: 'Sábado', valor: 6 }
  ];

  constructor(
    private fb: FormBuilder,
    private availabilityService: AvailabilityService,
    private spaceService: SpaceService,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      spaceId: [null, Validators.required],
      diaSemana: [null, Validators.required],
      horaInicio: ['', Validators.required],
      horaFim: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const decoded: any = this.authService.getDecoded();
    const userId = decoded?.primarysid;

    if (!userId) {
      console.error('UserId não encontrado no token.');
      return;
    }

    // Buscar espaços do usuário
    this.spaceService.getSpacesByUser(userId).subscribe({
      next: (res) => {
        this.spaces = res;
        if (this.spaces.length === 1) {
          // já seleciona automaticamente se houver apenas um espaço
          this.form.patchValue({ spaceId: this.spaces[0].id });
          this.loadAvailabilities(this.spaces[0].id);
        }
      },
      error: (err) => console.error('Erro ao carregar espaços do usuário:', err)
    });
  }

  submit() {
    if (this.form.invalid) return;

    const dto = {
      spaceId: this.form.value.spaceId,
      diaSemana: this.form.value.diaSemana,
      horaInicio: this.form.value.horaInicio + ':00',
      horaFim: this.form.value.horaFim + ':00'
    };

    console.log("DTO enviado =>", dto);

    this.availabilityService.addAvailability(dto).subscribe({
      next: (res) => {
        this.availabilities.push(res);
        this.form.reset();
      },
      error: (err) => console.error("Erro ao salvar disponibilidade:", err)
    });
  }

  loadAvailabilities(spaceId: string) {
    this.availabilityService.getAvailabilitiesBySpace(spaceId).subscribe({
      next: (res) => this.availabilities = res,
      error: (err) => console.error(err)
    });
  }

  markUnavailable(availabilityId: string) {
    this.availabilityService.setUnavailable(availabilityId).subscribe({
      next: (res) => {
        const index = this.availabilities.findIndex(a => a.id === availabilityId);
        if (index !== -1) this.availabilities[index] = res;
      },
      error: (err) => console.error(err)
    });
  }

  onSpaceChange(spaceId: string) {
    console.log('Espaço selecionado =>', spaceId);
    this.loadAvailabilities(spaceId);
  }

  getDiaSemanaNome(valor: number | string): string {
    if (typeof valor === 'string') {
      const map: Record<string, string> = {
        Sunday: 'Domingo',
        Monday: 'Segunda-feira',
        Tuesday: 'Terça-feira',
        Wednesday: 'Quarta-feira',
        Thursday: 'Quinta-feira',
        Friday: 'Sexta-feira',
        Saturday: 'Sábado'
      };
      return map[valor] || valor;
    }

    const dia = this.diasSemana.find(d => d.valor === valor);
    return dia ? dia.nome : '';
  }
}
