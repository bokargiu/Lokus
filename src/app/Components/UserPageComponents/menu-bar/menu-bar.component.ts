import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/Services/auth.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { PhotoService } from 'src/app/Services/photo.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit {
  imageUrl:string = ""
  constructor(private authService:AuthService, private customerService:CustomerService, private photoService:PhotoService){}
@Input() sidenav!: MatSidenav;
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
}
