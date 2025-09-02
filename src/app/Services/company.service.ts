import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place, Reservation } from 'src/app/Models/company.model'

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private apiUrl = 'https://localhost:7240/api/company';

  constructor(private http: HttpClient) {}

  getSpaces(): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.apiUrl}/spaces`);
  }

  addSpace(space: Place): Observable<Place> {
    return this.http.post<Place>(`${this.apiUrl}/spaces`, space);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/reservations`, reservation);
  }

  deleteReservation(spaceId: number, reservationId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/spaces/${spaceId}/reservations/${reservationId}`);
}
}

