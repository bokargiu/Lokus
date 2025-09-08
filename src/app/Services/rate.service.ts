import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  // private apiUrl = 'https://localhost:5001/api/Feedback/company/{companyId}/average'; // endpoint do seu backend

  // constructor(private http: HttpClient) {}

  // getAverageRate(companyId: number): Observable<number> {
  //   return this.http.get<number>(`${this.apiUrl}/average/${companyId}`);
  // }
}
