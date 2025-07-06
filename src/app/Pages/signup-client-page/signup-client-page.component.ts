import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-client-page',
  templateUrl: './signup-client-page.component.html',
  styleUrls: ['./signup-client-page.component.css']
})
export class SignupClientPageComponent {
  senha:string = '';
  confirmarSenha:string = ''

confirmar() {
  console.log('Senha confirmada!');
}
}