import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-client-page',
  templateUrl: './signup-customer-page.component.html',
  styleUrls: ['./signup-customer-page.component.css']
})
export class SignupClientPageComponent {
  nomeCompleto:string = '';
  cpf:string = '';
  dataNascimento = '';
  email:string = '';
  contato:string = '';
  username:string = '';
  senha:string = '';
  confirmarSenha:string = ''

    constructor (private http:HttpClient) {}


    confirm(){
      if (this.senha !== this.confirmarSenha) {
      alert("Senhas não coincidem!");
      return;
    }

    const customer = {
      nomeCompleto: this.nomeCompleto,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
      email: this.email,
      contato: this.contato,
      username: this.username,
      senha: this.senha,
      role: 'Client'
    };

    this.http.post('http://localhost:7101/api/client/signup', customer).subscribe({
      next:() => alert('Cliente cadastrado com sucesso!'),
      error: (err) =>alert('Erro ao cadastrar: ' + err.error?.message || err.message)
    });
  }
}
