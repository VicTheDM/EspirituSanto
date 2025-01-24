import { Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import L, * as Leaflet from 'leaflet';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contacto:not(x)',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  map: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }
  async ngOnInit()  {
    if (isPlatformBrowser(this.platformId)) {
      const L = await import('leaflet'); // Dynamically import Leaflet
      this.map = L.map('map').setView([28.659426, -106.089998], 25);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      var marker = L.marker([28.659426, -106.089998]).addTo(this.map);

    }
  }
  title = 'AngularOSM';

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 12,
    center: new Leaflet.LatLng(43.530147, 16.488932)
  };
}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
  ] as Leaflet.Layer[];
};
