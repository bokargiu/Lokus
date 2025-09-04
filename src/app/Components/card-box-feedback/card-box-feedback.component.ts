import { Component, OnInit, Input } from '@angular/core';
import { FeedbackService, FeedbackDto } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-card-box-feedback',
  templateUrl: './card-box-feedback.component.html',
  styleUrl: './card-box-feedback.component.css'
})
export class CardBoxFeedbackComponent {
  @Input() companyId!: string;

  feedbacks:FeedbackDto[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    if (this.companyId) {
      this.loadFeedbacks();
    }
  }

  loadFeedbacks(): void {
    this.feedbackService.getFeedbacks(this.companyId).subscribe({
      next: (data) => this.feedbacks = data,
      error: (err) => console.error('Erro ao carregar feedbacks', err)
    });
  }


}
