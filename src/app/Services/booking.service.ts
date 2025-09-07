import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Booking {
  id: string;
  spaceId: string;
  customerId: string;
  data: string;
  horaInicio: string;
  horaFim: string;
  status: 'Pendente' | 'Confirmado' | 'Cancelado';
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'https://localhost:7101/api/booking';

  constructor(private http: HttpClient) {}

  createBooking(booking: Partial<Booking>): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking);
  }

  cancelBooking(bookingId: string, customerId: string): Observable<Booking> {
    return this.http.patch<Booking>(`${this.apiUrl}/${bookingId}/cancel/${customerId}`, {});
  }

  getBookingsBySpace(spaceId: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/space/${spaceId}`);
  }

  getBookingsByCustomer(customerId: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/customer/${customerId}`);
  }
}
