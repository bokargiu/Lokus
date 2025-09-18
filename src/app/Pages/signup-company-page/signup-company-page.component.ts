import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-company-page',
  templateUrl: './signup-company-page.component.html',
  styleUrls: ['./signup-company-page.component.css']
})

export class SignupCompanyPageComponent {

  nomeFantasia: string = '';
  cnpj: string = '';
  email: string = '';
  contato: string = '';
  username: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor (private http:HttpClient) {}

    confirm() {
    if (this.senha !== this.confirmarSenha) {
      alert("Senhas não coincidem!");
      return;
    }

    const companyDto = {
      NameCompany: this.nomeFantasia,
      Cnpj: this.cnpj,
      ContactOther: this.contato,
      Username: this.username,
      Password: this.senha,
      Email: this.email,
      Stablishments: [
        {
          Name: this.nomeFantasia,
          VirtualName: this.nomeFantasia.replace(/\s+/g, '').toLowerCase(),
          Description: '',
          Contact: this.contato,
          Address: {
            Road: '',
            number: "",
            complement: "",
            neighborhood: "",
            City: '',
            State: '',
            Cep: ''
          }
        }
      ]
    };

    this.http.post('https://localhost:7101/api/Company/SignUp', companyDto)
      .subscribe({
        next: (res: any) => alert('Usuário cadastrado com sucesso!'),
        error: (err) => {
          console.error('Erro completo:', err);
          alert('Erro ao cadastrar: ' + (err.error?.message || err.message));
        }
      });
  }
  
}
