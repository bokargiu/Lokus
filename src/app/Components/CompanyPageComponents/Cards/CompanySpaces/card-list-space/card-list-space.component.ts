import { Component, Input } from '@angular/core';
import { Space } from 'src/app/Services/space.service';

@Component({
  selector: 'app-card-list-space',
  templateUrl: './card-list-space.component.html',
  styleUrl: './card-list-space.component.css'
})
export class CardListSpaceComponent {
    @Input() spaces: Space[] = [];
}
