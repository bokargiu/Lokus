import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeedbackService, CreateFeedbackBody } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-company-feedback',
  templateUrl: './company-feedback.component.html',
  styleUrl: './company-feedback.component.css'
})
export class CompanyFeedbackComponent {
  @Input() stablishmentId!: string;  
  @Output() closed = new EventEmitter<void>();

  feedback: CreateFeedbackBody = {
  comment: '',
  overallRating: 0,
  parkingRating: 0,
  wifiRating: 0,
  plugRating: 0,
  priceRating: 0
};

   constructor(private feedbackService: FeedbackService) {}

 submitFeedback() {
  this.feedbackService.createFeedback(this.stablishmentId, this.feedback).subscribe({
    next: (res) => {
      console.log('✅ Feedback enviado:', res);
      this.close();
    },
    error: (err) => {
      console.error('❌ Erro ao enviar feedback:', err);
    }
  });
}

close() {
  this.closed.emit();
}

}