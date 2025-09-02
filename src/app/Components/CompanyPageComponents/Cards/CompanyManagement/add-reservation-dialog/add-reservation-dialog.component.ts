import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Place, Reservation} from 'src/app/Models/company.model'

@Component({
  selector: 'app-add-reservation-dialog',
  templateUrl: './add-reservation-dialog.component.html',
  styleUrl: './add-reservation-dialog.component.css'
})
export class AddReservationDialogComponent {
    date: string = '';
  startTime: string = '';
  endTime: string = '';
  reservedBy: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddReservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { place: Place }
  ) {}

  save() {
    if (!this.date || !this.startTime || !this.endTime) {
      alert('Preencha todos os campos!');
      return;
    }

    const newReservation: Reservation = {
      id: Date.now(),
      placeId: this.data.place.id,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      reservedBy: this.reservedBy
    };

    this.dialogRef.close(newReservation);
  }

  cancel() {
    this.dialogRef.close();
  }

}
