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

export interface CreateFeedbackRequest {
  companyId: string;
  userId: string;
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

  // Obter todos os feedbacks 
  getFeedbacks(companyId: string): Observable<FeedbackDto[]> {
    return this.http.get<FeedbackDto[]>(`${this.apiUrl}/company/${companyId}`);
  }

  // Obter média geral de uma empresa
  getCompanyAverage(companyId: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/company/${companyId}/average`);
  }

  // Criar feedback
  createFeedback(request: CreateFeedbackRequest): Observable<FeedbackDto> {
    return this.http.post<FeedbackDto>(this.apiUrl, request);
  }

  // Atualizar 
  updateFeedback(feedbackId: string, request: CreateFeedbackRequest): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${feedbackId}`, request);
  }

  // Deletar 
  deleteFeedback(feedbackId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${feedbackId}`);
  }
}