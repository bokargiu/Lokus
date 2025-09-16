import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Space, SpaceService } from 'src/app/Services/space.service';
import { MatSelect } from "@angular/material/select";

@Component({
  selector: 'app-card-rental-form',
  templateUrl: './card-rental-form.component.html',
  styleUrl: './card-rental-form.component.css'
})
export class CardRentalFormComponent implements OnInit{
  @Input() stablishmentId: string = '';
  @Output() confirmed = new EventEmitter<{ spaceId: string, spaceName: string, date: Date, hour: string, price: number }>();

  spaces: Space[] = [];
  selectedSpace: Space | null = null;
  selectedDate: string = '';
  selectedHour: string = '';
  hours: string[] = [];

  constructor(private spaceService: SpaceService) {
    for (let h = 8; h <= 19; h++) {
      this.hours.push(h.toString().padStart(2, '0') + ":00");
    }
  }

  ngOnInit(): void {
    if (this.stablishmentId) {
      this.spaceService.getSpacesByStablishment(this.stablishmentId).subscribe(spaces => {
        this.spaces = spaces;
      });
    }
  }

  confirmRental() {
    if (this.selectedSpace && this.selectedDate && this.selectedHour) {
      this.confirmed.emit({
        spaceId: this.selectedSpace.id,
        spaceName: this.selectedSpace.name,
        date: new Date(this.selectedDate),
        hour: this.selectedHour,
        price: this.selectedSpace.price
      });

      this.selectedSpace = null;
      this.selectedDate = '';
      this.selectedHour = '';
    } else {
      alert("Selecione todos os campos!");
    }
  }

}
