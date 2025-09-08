import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StablishmentGalleryDto {
  id: string;
  fileName: string;
  base64Data: string;
}

@Injectable({
  providedIn: 'root'
})
export class StablishmentGalleryService {

  private apiUrl = 'https://localhost:7101/api/StablishmentGallery';

  constructor(private http: HttpClient) {}

  uploadImage(stablishmentId: string, file: File): Observable<StablishmentGalleryDto> {
    const reader = new FileReader();

    return new Observable(observer => {
        reader.onload = () => {
            const base64 = (reader.result as string).split(',')[1]; // remove "data:image/png;base64,"
            this.http.post<StablishmentGalleryDto>(`${this.apiUrl}/upload`, {
                stablishmentId,
                fileName: file.name,
                base64: base64
            }).subscribe({
                next: res => observer.next(res),
                error: err => observer.error(err),
                complete: () => observer.complete()
            });
        };
        reader.readAsDataURL(file);
    });
}

  getImages(stablishmentId: string): Observable<StablishmentGalleryDto[]> {
    return this.http.get<StablishmentGalleryDto[]>(`${this.apiUrl}/stablishment/${stablishmentId}`);
  }

  deleteImage(imageId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${imageId}`);
  }
}

