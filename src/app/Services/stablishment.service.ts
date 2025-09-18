import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { jwtDecode } from "jwt-decode";


export interface Stablishment {
    id: string;
    name: string;
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
    private apiUrl = 'https://localhost:7101/api/Stablishment';
;

    constructor(private http: HttpClient) {}

    
    getStablishment(id: string): Observable<Stablishment> {
        return this.http.get<Stablishment>(`${this.apiUrl}/${id}`);
    }

    getMyStablishments(): Observable<StablishmentResponseDto[]> {
    const token = localStorage.getItem('token'); // pega o token
    console.log('Token que será enviado:', token); // <-- adicione aqui

    return this.http.get<StablishmentResponseDto[]>(`${this.apiUrl}/my-stablishment`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    }

    // stablishment.service.ts
    getByCompany(companyId: string): Observable<Stablishment[]> {
        return this.http.get<Stablishment[]>(`${this.apiUrl}/byCompany/${companyId}`);
    }

    updateStablishment(id: string, dto: any) {
  return this.http.patch(`${this.apiUrl}/${id}`, dto);
}


}
