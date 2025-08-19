import { AfterViewInit, Attribute, Component, OnInit } from '@angular/core';

// import * as L from 'leaflet';
declare let L: any;
  
@Component({
  selector: 'app-localize-near-map',
  templateUrl: './localize-near-map.component.html',
  styleUrls: ['./localize-near-map.component.css'],
})
export class LocalizeNearMapComponent implements AfterViewInit{

  map!: any;

  private Icon = new L.Icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
    iconSize: [40, 40],
    iconAnchor: [20, 39],
  });

  ngAfterViewInit(): void {
      this.InitMap();
  }

  private InitMap(): void {
    this.map = L.map('map').setView([-26.9177, -49.0700], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
      iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
      shadowUrl: '',
      iconSize: [40, 40],
      iconAnchor: [20, 39]
    });

    const marker = L.marker([-26.9177, -49.0700], {
      icon: this.Icon
    })
      .addTo(this.map)
      .bindPopup('Proway')

    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: true
    })
      .on('markgeocode', (e: any) => {
        const center = e.geocode.center;
        L.marker(center)
        .addTo(this.map)
        .bindPopup(e.geocode.name)
        .openPopup();
        this.map.setView(center, 16);
      })
      .addTo(this.map);
  }
}
