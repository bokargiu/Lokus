import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-company-page',
  templateUrl: './signup-company-page.component.html',
  styleUrls: ['./signup-company-page.component.css']
})
export class SignupCompanyPageComponent {
  senha:string = '';
  confirmarSenha:string = ''

confirmar() {
  console.log('Senha confirmada!');
}
}
