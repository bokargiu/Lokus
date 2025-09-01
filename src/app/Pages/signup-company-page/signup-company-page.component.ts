import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-company-page',
  templateUrl: './signup-company-page.component.html',
  styleUrls: ['./signup-company-page.component.css']
})

export class SignupCompanyPageComponent {

  nomeFantasia:string='';
  cnpj:string='';
  email:string='';
  contato:string='';
  username:string='';
  senha:string = '';
  confirmarSenha:string = ''

  constructor (private http:HttpClient) {}

  confirm() {
      if (this.senha !== this.confirmarSenha) {
      alert("Senhas não coincidem!");
      return;
  }

  const company = {
    NameCompany: this.nomeFantasia,
    Cnpj: this.cnpj,
    ContactOther: this.contato,
    Email: this.email,
    Username: this.username,
    Password: this.senha,
    Role: 'Company'
  };

  this.http.post('https://localhost:7101/api/SignupCompany/SignUp', company).subscribe({
    next: (res:any) => alert(res.message || 'Usuário cadastrado com sucesso!'),
    error: (err) =>{
      console.error('Erro completo:', err);
      
      if(err.error?.erros) {
        alert('Erro ao cadastrar: \n' + err.error.errors.join('\n'));
      } else {
        alert('Erro ao cadastrar: ' + (err.error?.erro || err.messsage));
      }
    }
  });
  }
}
