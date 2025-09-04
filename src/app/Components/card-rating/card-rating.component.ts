import { Component, OnInit, Input } from '@angular/core';
import { FeedbackService, FeedbackDto } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-card-rating',
  templateUrl: './card-rating.component.html',
  styleUrl: './card-rating.component.css'
})
export class CardRatingComponent {
  @Input() companyId!: string;

  averageOverall: number = 0;
  averageParking: number = 0;
  averageWifi: number = 0;
  averagePlug: number = 0;
  averagePrice: number = 0;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    if (this.companyId) {
      this.loadSummary();
    }
  }

    loadSummary(): void {
    this.feedbackService.getFeedbacks(this.companyId).subscribe({
      next: (data: FeedbackDto[]) => {
        if (data.length > 0) {
          this.averageOverall = this.calculateAverage(data.map(f => f.overallRating));
          this.averageParking = this.calculateAverage(data.map(f => f.parkingRating));
          this.averageWifi = this.calculateAverage(data.map(f => f.wifiRating));
          this.averagePlug = this.calculateAverage(data.map(f => f.plugRating));
          this.averagePrice = this.calculateAverage(data.map(f => f.priceRating));
        }
      },
      error: (err) => console.error('Erro ao carregar médias', err)
    });
  }

  private calculateAverage(values: number[]): number {
    const total = values.reduce((acc, v) => acc + v, 0);
    return total / values.length;
  }
}
