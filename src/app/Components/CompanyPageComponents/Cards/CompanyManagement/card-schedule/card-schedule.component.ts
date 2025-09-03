import { Component, OnInit } from '@angular/core';
import { SpaceService, Space } from 'src/app/Services/space.service';
import { ScheduleService } from 'src/app/Services/schedule.service';


@Component({
  selector: 'app-card-schedule',
  templateUrl: './card-schedule.component.html',
  styleUrl: './card-schedule.component.css'
})
export class CardScheduleComponent implements OnInit{
  spaces: Space[] = [];
  selectedSpaceId!: number;
  dayOfWeek: string = '';
  time: string = '';

  daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  constructor(
    private spaceService: SpaceService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.loadSpaces();
  }

  loadSpaces() {
    this.spaceService.getSpaces().subscribe(data => {
      this.spaces = data;
    });
  }

  addSchedule() {
    if (!this.selectedSpaceId || !this.dayOfWeek || !this.time) return;

    this.scheduleService.addSchedule({
      spaceId: this.selectedSpaceId,
      dayOfWeek: this.dayOfWeek,
      time: this.time
    }).subscribe(() => {
      this.dayOfWeek = '';
      this.time = '';
      this.loadSpaces(); // Atualiza os horários do spaceCard automaticamente
    });
  }

}
