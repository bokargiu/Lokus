import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Payment {
  id: string;
  reservaId: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'https://localhost:7101/api/payment';

  constructor(private http: HttpClient) {}

  createPaymentSimulado(bookingId: string, price: number): Observable<Payment> {
    return this.http.post<Payment>(`${this.apiUrl}/${bookingId}/simulated?price=${price}`, {});
  }

  getPaymentsByCustomer(customerId: string): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/customer/${customerId}`);
  }

  getPaymentsBySpace(spaceId: string): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/space/${spaceId}`);
  }
}
