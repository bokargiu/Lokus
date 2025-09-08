
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {

  //inicializar
  user='';
  password='';
  errorMessage='';



   constructor(private authService : AuthService, private router:Router) {}

  async onLogin() {
       this.authService.login(this.user, this.password).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        
        const decoded = this.authService.getDecoded()

        if (decoded.role === 'company') {
          this.router.navigate(['/company/home-co']);
        } else {
          this.router.navigate(['/customer/home']);
        }
      },
      error: (err) => {
        console.error('Erro no login', err);
      }
    });
  }
}
