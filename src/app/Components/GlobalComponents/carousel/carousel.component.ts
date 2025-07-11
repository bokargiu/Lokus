import { Component } from '@angular/core';
import { GalleriaModule } from "primeng/galleria";
import { ImagesCorworkinService } from 'src/app/Services/images-corworkin.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  standalone: true,
  imports: [GalleriaModule],
  providers: [ImagesCorworkinService]
})
export class CarouselComponent {
  
  images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    constructor(private Service: ImagesCorworkinService) {}

    ngOnInit() {
      this.images = this.Service.GetImages();
    }

}
