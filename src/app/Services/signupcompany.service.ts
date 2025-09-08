import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardCompany } from '../Models/company.model';

@Injectable({ providedIn: 'root' })

export class CardCompanyService {
    private apiUrl = 'https://localhost:7101/api/SignupCompany/register'

    constructor(private http: HttpClient) {}

    getCardCompany(): Observable<CardCompany[]> {
        return this.http.get<CardCompany[]>(this.apiUrl)
    }

    
}