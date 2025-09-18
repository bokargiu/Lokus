import { Component, Input } from '@angular/core';

export interface Feedback {
  userName: string;
  content: string;
  createdAt: string;
}
@Component({
  selector: 'app-card-box-feedback',
  templateUrl: './card-box-feedback.component.html',
  styleUrls: ['./card-box-feedback.component.css']
})

export class CardBoxFeedbackComponent {
public Feedbacks: Feedback[] = [
    { userName: "Alice M.", content: "Adoro trabalhar aqui! Ambiente tranquilo e bem iluminado.", createdAt: "2025-09-01T10:15:00Z" },
    { userName: "Bruno S.", content: "Ótima infraestrutura, mas às vezes fica muito barulhento.", createdAt: "2025-09-02T14:22:00Z" },
    { userName: "Carla R.", content: "Espaço moderno e silencioso, perfeito para estudar e focar.", createdAt: "2025-09-03T09:05:00Z" },
    { userName: "Daniel T.", content: "As cadeiras não são muito confortáveis, mas o Wi-Fi é excelente.", createdAt: "2025-09-03T16:40:00Z" },
    { userName: "Eduarda F.", content: "Ambiente inspirador, ótimo para networking e conhecer pessoas.", createdAt: "2025-09-04T11:30:00Z" }
  ];

  formatDate(dateStr: string): string {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString('pt-BR', options);
  }
}