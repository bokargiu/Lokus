import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  GetImagesByCompany: any;

constructor() {}

  GetImages() {
    return [
      { itemImageSrc: 'https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg', alt: 'Imagem 1' },
      { itemImageSrc: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg', alt: 'Imagem 2' },
      { itemImageSrc: 'https://images.pexels.com/photos/2041398/pexels-photo-2041398.jpeg', alt: 'Imagem 3' },
      { itemImageSrc: 'https://images.pexels.com/photos/3700252/pexels-photo-3700252.jpeg', alt: 'Imagem 4' },
      { itemImageSrc: 'https://images.pexels.com/photos/1181734/pexels-photo-1181734.jpeg', alt: 'Imagem 5' },
      { itemImageSrc: 'https://images.pexels.com/photos/8344699/pexels-photo-8344699.jpeg', alt: 'Imagem 6' },
      { itemImageSrc: 'https://images.pexels.com/photos/8169/pexels-photo.jpg', alt: 'Imagem 7' },
    ];
  }
}