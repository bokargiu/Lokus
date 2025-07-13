import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkMenu } from '@angular/cdk/menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
}
