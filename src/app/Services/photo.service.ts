import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';
import { CustomerService } from './customer.service';
import { PhotoDto } from '../Dto\'s/photoDto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

  getImages() {
    return [
      {
        itemImageSrc: 'https://t4.ftcdn.net/jpg/03/26/12/23/360_F_326122335_RKvTXMb4RYkIzk94ZoPjkZQe2CUOVnen.jpg',
        alt: 'Description for Image 1',
        title: 'Imagem 1'
      },
      {
        itemImageSrc: 'https://thumbs.dreamstime.com/b/portrait-meeting-training-business-asian-woman-sitting-boardroom-team-seminar-happy-smile-workshop-female-364197319.jpg',
        alt: '',
        title: 'Imagem 2'
      }
    ];
  }

    postImageOfProfile(file: FormData, customerId: string) {
    return this.http.post("http://localhost:5105/api/customer-images/profile/" + customerId, file)
  }

  getImageOfProfile(customerId: string) {
      return this.http.get<PhotoDto>("http://localhost:5105/api/customer-images/profile/" + customerId)
  }
}
