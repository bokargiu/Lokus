import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CdkMenu } from '@angular/cdk/menu';
import { MenuItem } from 'primeng/api';
import { MatSidenav } from '@angular/material/sidenav';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { PhotoService } from 'src/app/Services/photo.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { AuthService } from 'src/app/Services/auth.service';
import { PhotoDto } from 'src/app/Dto\'s/photoDto';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SideMenuComponent implements OnInit{
  num!: number;
  @Input() sidenav!:MatSidenav
  imageUrl: string | null = '';
  constructor(private photoService: PhotoService, private customerService: CustomerService, private authService: AuthService){}

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

