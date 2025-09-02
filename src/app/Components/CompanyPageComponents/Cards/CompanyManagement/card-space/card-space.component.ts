import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/Services/space.service';

@Component({
  selector: 'app-card-space',
  templateUrl: './card-space.component.html',
  styleUrl: './card-space.component.css'
})
export class CardSpaceComponent {
  spaces: any[] = [];
  newSpace: string = '';

  constructor(private spaceService: SpaceService) {}

  ngOnInit(): void {
    this.loadSpaces();
  }

  loadSpaces() {
    this.spaceService.getSpaces().subscribe(data => {
      this.spaces = data;
    });
  }

  addSpace() {
    if (!this.newSpace.trim()) return;

    this.spaceService.addSpace({ name: this.newSpace }).subscribe(() => {
      this.newSpace = '';
      this.loadSpaces();
    });
  }

}
