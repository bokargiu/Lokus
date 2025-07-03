import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardCompany } from '../Models/company.model';

export class CardCompanyService {
    private apiUrl = 'http://localhost:59054/'

    constructor(private http: HttpClient) {}

    getCardCompany(): Observable<CardCompany[]> {
        return this.http.get<CardCompany[]>(this.apiUrl)
    }

    
}