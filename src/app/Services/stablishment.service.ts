import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Stablishment {
    id: string;
    companyName: string;
    virtualName: string;
    description: string;
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
}