import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-subscription',
  templateUrl: './card-subscription.component.html',
  styleUrl: './card-subscription.component.css'
})
export class CardSubscriptionComponent {
  @Input() nome!: string;
  @Input() preco!: string;
  @Input() beneficios!: string[];
}
