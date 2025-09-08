import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/Services/photo.service';  

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css']
})
export class CompaniesPageComponent implements OnInit{

  images: any [] = [];
  responsiveOptions: any [] = [];

  constructor(private photoService : PhotoService) {}

  ngOnInit(): void {
    this.images = this.photoService.getImages();

    this.responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    }
    ]
  }

  openRegister(){
    window.open('http://localhost:4200/cadastro-empresa', '_blank')
  }

}
