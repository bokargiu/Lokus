import { HtmlParser } from '@angular/compiler';
import { Component, InjectionToken, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { RippleGlobalOptions } from '@angular/material/core';

@Component({
  selector: 'app-user-card-home',
  templateUrl: './user-card-home.component.html',
  styleUrl: './user-card-home.component.css'
})
export class UserCardHomeComponent{
visualizacoes = 3
tokens = 21
amigos = 2
empresas_seguidas = 6
t = true
}
