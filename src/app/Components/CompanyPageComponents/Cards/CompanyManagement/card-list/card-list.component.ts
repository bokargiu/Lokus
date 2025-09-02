import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/Services/schedule.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
   schedules: any[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getSchedules().subscribe(data => {
      this.schedules = data;
    });
  }
}
