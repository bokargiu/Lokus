
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
       try {
      const res = await firstValueFrom(this.authService.login(this.user, this.password));
      this.authService.saveToken(res.token);

      console.log('Login bem sucedido!', res);
      const response = this.authService.getDecoded()

      if (response.role === 'customer') {
        this.router.navigate(['/customer']);
      } else if (response.role === 'company'){
        this.router.navigate(['/empresa']);
      } else {
        this.router.navigate(['/']);
      }

    } catch (err) {
      this.errorMessage = 'Usuário ou senha inválida';
      console.error(err);
    }
  }
}
