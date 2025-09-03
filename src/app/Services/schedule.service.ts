import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'http://localhost:7101/api/Schedule';

  constructor(private http: HttpClient) {}

  addSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, schedule);
  }

  getSchedules(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
