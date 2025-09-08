import { Component } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { PhotoService } from 'src/app/Services/photo.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrl: './user-options.component.css'
})
export class UserOptionsComponent {
  profileImage:File | null = null

  constructor(private photoService: PhotoService, private customerService:CustomerService, private authService:AuthService) {}
  onFile(event: any){
    this.profileImage = event.target.files[0];
  }
  upLoadProfileImage() {
    if (!this.profileImage) return;

    const decoded = this.authService.getDecoded();
    const formData = new FormData();
    formData.append('file', this.profileImage, this.profileImage.name);

    this.customerService.getCustomerIdByUserId(decoded.primarysid).subscribe({
      next: customerId => {
        this.photoService.postImageOfProfile(formData, customerId).subscribe({
          next: res => {
            console.log("Upload concluído", res)
            window.location.reload()
          },
          error: err => console.error("Erro ao enviar imagem", err)
        });
      },
      error: err => console.error("Erro ao buscar cliente", err)
    });
  }
}
