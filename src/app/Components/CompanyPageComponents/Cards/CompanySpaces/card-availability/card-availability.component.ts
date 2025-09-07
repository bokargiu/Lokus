import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Availability, AvailabilityService } from 'src/app/Services/availability.service';
import { Space } from 'src/app/Services/space.service';


@Component({
  selector: 'app-card-availability',
  templateUrl: './card-availability.component.html',
  styleUrl: './card-availability.component.css'
})
export class CardAvailabilityComponent {
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

  constructor(private fb: FormBuilder, private availabilityService: AvailabilityService) {
    this.form = this.fb.group({
      spaceId: ['', Validators.required],
      diaSemana: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFim: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.form.invalid) return;

    const dto = this.form.value;

    this.availabilityService.addAvailability(dto).subscribe({
      next: (res) => {
        this.availabilities.push(res);
        this.form.reset();
      },
      error: (err) => console.error(err)
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
}
