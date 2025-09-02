import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-support',
  templateUrl: './company-support.component.html',
  styleUrl: './company-support.component.css'
})
export class CompanySupportComponent {
    supportData = {
    name: '',
    email: '',
    phone: '',
    reason: '',
    description: ''
  };

   constructor(private http: HttpClient) {}

  sendSupportRequest() {
    // Validação básica
    if (!this.supportData.name || !this.supportData.email || !this.supportData.reason) {
      alert('Por favor, preencha os campos obrigatórios.');
      return;
    }

    // Envio para o backend
    this.http.post('https://localhost:7101/api', this.supportData)
      .subscribe({
        next: () => alert('Solicitação enviada com sucesso!'),
        error: () => alert('Erro ao enviar solicitação, tente novamente.')
      });
  }
}
