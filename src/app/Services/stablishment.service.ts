import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export interface Stablishment {
    id: string;
    companyName: string;
    virtualName: string;
    description: string;
}

export interface StablishmentResponseDto {
  id: string;
  name: string;
  companyId: string;
}

@Injectable({
    providedIn: 'root'
})

export class StablishmentService{
    private apiUrl = 'http://localhost:7101/api/stablishment';

    constructor(private http: HttpClient) {}

    getStablishment(id:string): Observable<Stablishment> {
        return this.http.get<Stablishment>(`${this.apiUrl}/${id}`);
    }

    updateStablishment(id:string, data: {virtualName?: string; description?: string}): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, data)
    }

    getMyStablishments(): Observable<StablishmentResponseDto[]> {
         const token = localStorage.getItem('token');
        return this.http.get<StablishmentResponseDto[]>(`${this.apiUrl}/my-stablishments`, {
        headers: {
            Authorization: `Bearer ${token}`  // <-- essencial
        }
    });
    }
}

