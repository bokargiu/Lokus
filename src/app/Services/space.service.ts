import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceCreateDto } from '../Dto\'s/spaceDto';
import { Availability } from './availability.service';

  export interface Space {
  id: string;
  stablishmentId: string;
  name: string;
  capacity: number;
  description?: string;
  price: number;
  priceEnum: 'PorHora' | 'PorDia';
  availabilities?: Availability[]; // opcional
}


@Injectable({
  providedIn: 'root'
})
export class SpaceService {


  private apiUrl = 'http://localhost:7101/api/Space';
  private apiUrl = 'https://localhost:7101/api/Space';

  constructor(private http: HttpClient) {}

addSpace(space: Partial<Space>): Observable<Space> {
    return this.http.post<Space>(this.apiUrl, space);
  addSpace(space: SpaceCreateDto): Observable<Space> {
  return this.http.post<Space>(this.apiUrl, space);
}
  
  getStablishmentsByUser(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/byUser?userId=${userId}`);
  }

  getSpacesByStablishment(stablishmentId: string): Observable<Space[]> {
    return this.http.get<Space[]>(`${this.apiUrl}/stablishment/${stablishmentId}`);
  }

  updateSpace(spaceId: string, space: Partial<Space>): Observable<Space> {
    return this.http.put<Space>(`${this.apiUrl}/${spaceId}`, space);
  }

  deleteSpace(spaceId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${spaceId}`);
  }

  getSpacesByUser(userId: string): Observable<Space[]> {
  return this.http.get<Space[]>(`${this.apiUrl}/byUser/spaces?userId=${userId}`);
}


}
