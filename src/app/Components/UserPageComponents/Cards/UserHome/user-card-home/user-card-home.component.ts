import { HtmlParser } from '@angular/compiler';
import { Component, InjectionToken, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { RippleGlobalOptions } from '@angular/material/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { PhotoService } from 'src/app/Services/photo.service';

@Component({
  selector: 'app-user-card-home',
  templateUrl: './user-card-home.component.html',
  styleUrl: './user-card-home.component.css'
})
export class UserCardHomeComponent implements OnInit {
  imageUrl:string = ""
  constructor(private authService:AuthService, private customerService:CustomerService, private photoService:PhotoService){}
ngOnInit() {
    const decoded = this.authService.getDecoded();
    this.customerService.getCustomerIdByUserId(decoded.primarysid).subscribe(CustomerId =>{
      if (!CustomerId) return;
      this.photoService.getImageOfProfile(CustomerId).subscribe(photo => {
        if (!photo.base64Data) return;
        this.imageUrl = 'data:image/png;base64,'+ photo.base64Data
      })
    })
  }
visualizacoes = 3
tokens = 21
amigos = 2
empresas_seguidas = 6
t = true
}
