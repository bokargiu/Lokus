import { Attribute, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-localize-near-map',
  templateUrl: './localize-near-map.component.html',
  styleUrls: ['./localize-near-map.component.css'],
})
export class LocalizeNearMapComponent {
  Icon = new L.Icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
    iconSize: [40, 40],
    iconAnchor: [20, 39]
    })
  options = {
  
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution:'© OpenStreetMap contributors'
      })
    ],
    zoom: 18,
    center: L.latLng(-26.9177, -49.0700),
  }
  
  markers = [
    L.marker([-26.9177, -49.0700], {
      icon: this.Icon
    }).bindPopup('Proway')
  ]
}
