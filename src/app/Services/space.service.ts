import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

  export interface Space {
  id: number;
  name: string;
  schedules?: Schedule[];
}

  export interface Schedule {
    id: number;
    dayOfWeek: string;
    time: string;
    spaceId: number;
    spaceName?: string;
  }

@Injectable({
  providedIn: 'root'
})
export class SpaceService {


  private apiUrl = 'http://localhost:7101/api/Space';

  constructor(private http: HttpClient) {}

  getSpaces(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addSpace(space: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, space);
  }
}
