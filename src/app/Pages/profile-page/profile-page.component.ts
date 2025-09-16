import { Component, OnInit, Input } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { Companies } from 'src/app/Mock/companies-mock';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/Services/images.service';
import { Feedbacks } from 'src/app/Mock/feedback-mock';
import { BookingService, Booking } from 'src/app/Services/booking.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Stablishment, StablishmentService } from 'src/app/Services/stablishment.service';
import { Space, SpaceService } from 'src/app/Services/space.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit{
  stablishment: any = null; 
  spaces: Space[] = [];
  showRentalForm = false;
  confirmed = false;
  rentalDetails: any = null;


    stablishmentId: string = '';

  constructor(
    private route: ActivatedRoute,
    private stablishmentService: StablishmentService,
    private spaceService: SpaceService,
    private bookingService: BookingService
  ) {}


  ngOnInit(): void {
  const stablishmentId = this.route.snapshot.paramMap.get('id');

  if (stablishmentId) {
    this.stablishmentService.getStablishment(stablishmentId).subscribe({
      next: (stab) => {
        this.stablishment = stab;

        // só chama spaces se o stablishment tiver Id válido
        if (stab && stab.id) {
          this.spaceService.getSpacesByStablishment(stab.id).subscribe({
            next: (spaces) => this.spaces = spaces,
            error: (err) => console.error("Erro ao carregar espaços:", err)
          });
        }
      },
      error: (err) => {
        console.error("Erro ao carregar stablishment:", err);
      }
    });
  }
}


  openRentalForm() {
    this.showRentalForm = true;
    this.confirmed = false;
    this.rentalDetails = null;
  }

  closeRentalForm() {
    this.showRentalForm = false;
  }

  onConfirmedRental(details: { spaceId: string, spaceName: string, date: Date, hour: string, price: number }) {
    this.showRentalForm = false;

    const customerId = 'ID_DO_CLIENTE_LOGADO'; // substituir pelo ID real

    const bookingPayload: Partial<Booking> = {
      spaceId: details.spaceId,
      customerId: customerId,
      data: details.date.toISOString(),
      horaInicio: details.hour,
      horaFim: (parseInt(details.hour.split(':')[0], 10) + 1).toString().padStart(2, '0') + ':00',
      price: details.price
    };

    this.bookingService.createBooking(bookingPayload).subscribe(res => {
      this.confirmed = true;
      this.rentalDetails = { ...details, id: res.id };
    });
  }

  closeMessage() {
    this.confirmed = false;
    this.rentalDetails = null;
  }

  parseHour(hour: string): string {
    const h = parseInt(hour.split(':')[0], 10);
    return (h + 1).toString().padStart(2, '0') + ':00';
  }



}


