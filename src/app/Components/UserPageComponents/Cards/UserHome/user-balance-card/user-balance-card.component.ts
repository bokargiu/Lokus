import { Component } from '@angular/core';
import { MatCardHarness } from '@angular/material/card/testing';

@Component({
  selector: 'app-user-balance-card',
  templateUrl: './user-balance-card.component.html',
  styleUrl: './user-balance-card.component.css',
})
export class UserBalanceCardComponent {
saldo:number = 130;

}
