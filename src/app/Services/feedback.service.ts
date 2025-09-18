import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FeedbackDto {
  id: string;
  comment: string;
  overallRating: number;
  parkingRating: number;
  wifiRating: number;
  plugRating: number;
  priceRating: number;
  username: string;
  createdAt: string;
}

export interface CreateFeedbackBody {
  comment: string;
  overallRating: number;
  parkingRating: number;
  wifiRating: number;
  plugRating: number;
  priceRating: number;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:5000/api/feedback'; 

  constructor(private http: HttpClient) {}

 // feedback.service.ts atualizado
  getFeedbacks(stablishmentId: string): Observable<FeedbackDto[]> {
    return this.http.get<FeedbackDto[]>(`${this.apiUrl}/stablishment/${stablishmentId}/feedbacks`);
  }

  getStablishmentAverage(stablishmentId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stablishment/${stablishmentId}/average`);
  }

  createFeedback(stablishmentId: string, body: CreateFeedbackBody) {
    return this.http.post(`${this.apiUrl}/stablishment/${stablishmentId}/feedback`, body);
  }


  deleteFeedback(feedbackId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${feedbackId}`);
  }

}