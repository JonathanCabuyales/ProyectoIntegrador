import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';



//google
declare var google;

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  
  map:any;

  constructor(
    private _geolocation: Geolocation,
  ) { }

  //funcion para crear el mapa
  async initMapa(mapElement: ElementRef){

    const myLatLng = await this.getCoordenadas();
    const lngLat = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
    let mapOpt = {
      center: lngLat,
      zoom: 16,
      maptypeId: 'roadmap',
      zoomControl: true,
    }

    this.map = new google.maps.Map(mapElement.nativeElement, mapOpt);
    
  }

  //funcion para obtener las coordenadas
  async getCoordenadas(){
    const mylatLng = await this._geolocation.getCurrentPosition();
    return {
      lat: mylatLng.coords.latitude,
      lng: mylatLng.coords.longitude
    }
  }
}
