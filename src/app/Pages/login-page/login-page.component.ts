import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  //inicializar
  user='';
  password='';
  errorMessage='';

   constructor(private authService : AuthService) {}
  async onLogin() {
       try {
      const res = await firstValueFrom(this.authService.login(this.user, this.password));
      this.authService.saveToken(res.token);
      console.log('Login bem sucedido!');
    } catch (err) {
      this.errorMessage = 'Usuário ou senha inválida';
      console.error(err);
    }
  }
}
