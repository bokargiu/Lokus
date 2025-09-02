import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reservation, Place } from 'src/app/Models/company.model';

@Component({
  selector: 'app-card-confirm-dialog',
  templateUrl: './card-confirm-dialog.component.html',
  styleUrl: './card-confirm-dialog.component.css'
})
export class CardConfirmDialogComponent {
reservedBy: string = '';

  constructor(
    public dialogRef: MatDialogRef<CardConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { space: Place; block: { start: string; end: string }; date: string }
  ) {}

  confirm() {
    const newReservation: Reservation = {
      id: Date.now(),
      placeId: this.data.space.id,
      date: this.data.date,
      startTime: this.data.block.start,
      endTime: this.data.block.end,
      reservedBy: this.reservedBy
    };
    this.dialogRef.close(newReservation);
  }

  cancel() {
    this.dialogRef.close();
  }
}
