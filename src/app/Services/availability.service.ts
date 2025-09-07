import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Availability {
  id: string;
  spaceId: string;
  diaSemana: number;
  horaInicio: string;
  horaFim: string;
  status: 'Disponivel' | 'Indisponivel';
}

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private apiUrl = 'https://localhost:7101/api/availability';

  constructor(private http: HttpClient) {}

  addAvailability(availability: Partial<Availability>): Observable<Availability> {
    return this.http.post<Availability>(this.apiUrl, availability);
  }

  getAvailabilitiesBySpace(spaceId: string): Observable<Availability[]> {
    return this.http.get<Availability[]>(`${this.apiUrl}/space/${spaceId}`);
  }

  setUnavailable(availabilityId: string): Observable<Availability> {
    return this.http.patch<Availability>(`${this.apiUrl}/${availabilityId}/unavailable`, {});
  }
}
