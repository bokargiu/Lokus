import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/Services/space.service';
import { ScheduleService } from 'src/app/Services/schedule.service';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-card-schedule',
  templateUrl: './card-schedule.component.html',
  styleUrl: './card-schedule.component.css'
})
export class CardScheduleComponent {
  spaces: any[] = [];
  selectedSpaceId!: number;
  dayOfWeek: string = '';
  time: string = '';

  daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  constructor(
    private spaceService: SpaceService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.spaceService.getSpaces().subscribe(data => {
      this.spaces = data;
    });
  }

  addSchedule() {
    const schedule = {
      spaceId: this.selectedSpaceId,
      dayOfWeek: this.dayOfWeek,
      time: this.time
    };

    this.scheduleService.addSchedule(schedule).subscribe(() => {
      this.dayOfWeek = '';
      this.time = '';
    });
  }

}
