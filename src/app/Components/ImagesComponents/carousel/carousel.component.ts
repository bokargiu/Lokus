import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/Services/images.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

images: any[] = [];

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 3 },
    { breakpoint: '768px', numVisible: 2 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  constructor(private service: ImagesService) {}

  ngOnInit() {
    this.images = this.service.GetImages();
    console.log('Images loaded:', this.images);
  }
}


