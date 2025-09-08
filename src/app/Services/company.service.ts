import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place, Availability } from 'src/app/Models/company.model'

@Injectable({ providedIn: 'root' 
})

export class CompanyService {
  private apiUrl = 'https://localhost:7240/api/company';

  constructor(private http: HttpClient) {}
  // Buscar todos os espaços
  getSpaces(): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.apiUrl}/spaces`);
  }

  // Criar novo espaço
  addPlace(place: Place): Observable<Place> {
    return this.http.post<Place>(`${this.apiUrl}/spaces`, place);
  }

  // Atualizar espaço existente
  updatePlace(place: Place): Observable<Place> {
    return this.http.put<Place>(`${this.apiUrl}/spaces/${place.id}`, place);
  }

  // Excluir espaço
  deletePlace(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/spaces/${id}`);
  }

  // Buscar disponibilidade de um espaço
  getAvailability(placeId: number): Observable<Availability[]> {
    return this.http.get<Availability[]>(`${this.apiUrl}/availability?placeId=${placeId}`);
  }

  // Adicionar novo bloco de disponibilidade
  addAvailability(avail: Availability): Observable<Availability> {
    return this.http.post<Availability>(`${this.apiUrl}/availability`, avail);
  }

  // Excluir bloco de disponibilidade
  deleteAvailability(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/availability/${id}`);
  }

  saveAllAvailabilities(placeId: number, availabilities: Availability[]) {
  return this.http.post<Availability[]>(`/api/places/${placeId}/availabilities`, availabilities);
}

}

