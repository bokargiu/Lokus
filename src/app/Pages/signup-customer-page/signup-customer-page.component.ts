import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-client-page',
  templateUrl: './signup-customer-page.component.html',
  styleUrls: ['./signup-customer-page.component.css']
})
export class SignupCustomerPageComponent {
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
      dataNascimento: new Date(this.dataNascimento),
      email: this.email,
      contato: this.contato,
      username: this.username,
      password: this.senha,
      comfirmPassword: this.confirmarSenha, // precisa bater com o DTO
      role: 'customer'
    };
    
    this.http.post('https://localhost:7101/api/Customer/SingUp', customer).subscribe({
      next: (res: any) =>
        alert(res.mensagem || 'Usuário cadastrado com sucesso!'),
      error: (err) => {
        console.error('Erro completo:', err);
        if (err.error?.erros) {
          alert('Erro ao cadastrar:\n' + err.error.erros.join('\n'));
        } else {
          alert('Erro ao cadastrar: ' + (err.error?.erro || err.message));
        }
      }
    });
  }
}
