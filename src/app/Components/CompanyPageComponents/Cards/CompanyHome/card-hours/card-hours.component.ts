import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-hours',
  templateUrl: './card-hours.component.html',
  styleUrl: './card-hours.component.css'
})
export class CardHoursComponent {
  hours: number[] = [125, 35, 220, 67, 94]; 
  selectedHour!: number; 

  constructor() {
    this.randomHour();
  }

  randomHour(){
    const index = Math.floor (Math.random() * this.hours.length);
    this.selectedHour = this.hours[index]
  }
}
