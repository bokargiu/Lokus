import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-rental-form-mock',
  templateUrl: './rental-form-mock.component.html',
  styleUrls:  ['./rental-form-mock.component.css']
})
export class RentalFormMockComponent {
  @Input() details: { space: string, date: string, hour: string } | null = null;
  @Output() confirmed = new EventEmitter<{ space: string, date: Date, hour: string }>();

  selectedSpace = '';
  selectedDate: string = ''; // ainda é string no input do HTML
  selectedHour = '';

  spaces = [
    "Sala de reunião para 8 pessoas",
    "Espaço externo, mesa para 3",
    "Sala de reunião para 5 pessoas",
    "Espaço em mesa para 4 pessoas"
  ];

  hours: string[] = [];

  constructor() {
    for (let h = 8; h <= 19; h++) {
      this.hours.push(h.toString().padStart(2, '0') + ":00");
    }
  }

    confirmRental() {
    if (this.selectedSpace && this.selectedDate && this.selectedHour) {
      // converte string para Date antes de emitir
      const rentalDate = new Date(this.selectedDate);

      this.confirmed.emit({
        space: this.selectedSpace,
        date: rentalDate,
        hour: this.selectedHour
      });

      // opcional: limpar campos após confirmar
      this.selectedSpace = '';
      this.selectedDate = '';
      this.selectedHour = '';
    } else {
      alert("Selecione todos os campos!");
    }
  }}
