import { Component, Input } from '@angular/core';
import { Place, Reservation } from 'src/app/Models/company.model';
import { MatDialog } from '@angular/material/dialog';
import { CardAddDialogComponent } from '../card-add-dialog/card-add-dialog.component';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-card-reservation',
  templateUrl: './card-reservation.component.html',
  styleUrl: './card-reservation.component.css'
})
export class CardReservationComponent {
@Input() places: Place[] = [];

  selectedDate: Date = new Date();

  constructor(
    private dialog: MatDialog,
    private companyService: CompanyService
  ) {}

  // Abrir modal e salvar no backend
  openAddReservationDialog(place: Place) {
    const dialogRef = this.dialog.open(CardAddDialogComponent, {
      width: '400px',
      data: { place }
    });

    dialogRef.afterClosed().subscribe((result: Reservation | undefined) => {
      if (result) {
        this.companyService.addReservation(result).subscribe(saved => {
          place.reservations.push(saved); // adiciona o que voltou do back
        });
      }
    });
  }

  // Filtrar reservas por mês
  getReservationsForMonth(place: Place) {
    const month = this.selectedDate.getMonth();
    const year = this.selectedDate.getFullYear();
    return place.reservations.filter(r => {
      const resDate = new Date(r.date);
      return resDate.getMonth() === month && resDate.getFullYear() === year;
    });
  }

  deleteReservation(place: Place, reservation: Reservation) {
  if (confirm('Deseja realmente excluir esta reserva?')) {
    this.companyService.deleteReservation(place.id, reservation.id).subscribe(() => {
      // Remove a reserva do array local
      place.reservations = place.reservations.filter(r => r.id !== reservation.id);
    });
  }
}  
}
