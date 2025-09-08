import { Component } from '@angular/core';

interface Plano {
  nome: string;
  preco: string;
  beneficios: string[];
  tipo: 'customer' | 'company';
}

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent {
  activeIndex: number = 0; 

  planosClientes: Plano[] = [
    { nome: 'Básico', preco: 'R$20/mês', beneficios: ['Suporte básico', '1 usuário', 'Acesso limitado'], tipo: 'customer' },
    { nome: 'Premium', preco: 'R$40/mês', beneficios: ['Suporte 24/7', '3 usuários', 'Acesso completo'], tipo: 'customer' },
    { nome: 'Gold', preco: 'R$60/mês', beneficios: ['Suporte VIP', '10 usuários', 'Acesso ilimitado'], tipo: 'customer' }
  ];

  planosEmpresas: Plano[] = [
    { nome: 'StartUp', preco: 'R$150/mês', beneficios: ['Equipe até 20', 'Relatórios básicos', 'Suporte normal'], tipo: 'company' },
    { nome: 'Business', preco: 'R$300/mês', beneficios: ['Equipe até 50', 'Relatórios avançados', 'Suporte prioritário'], tipo: 'company' },
    { nome: 'Enterprise', preco: 'R$800/mês', beneficios: ['Equipe ilimitada', 'Customização', 'Gestor dedicado'], tipo: 'company' }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}

