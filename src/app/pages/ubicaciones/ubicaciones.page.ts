import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController, NavController } from '@ionic/angular';
import { StorageServiceService } from 'src/app/services/storage-service.service';

//plugins
import { Geolocation } from "@ionic-native/geolocation/ngx";

/* import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps/ngx'; */
import { InformacionPage } from '../informacion/informacion.page';
import { Router } from '@angular/router';
import { FutbolInnService } from '../../services/futbol-inn.service';




declare var mapboxgl;

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.page.html',
  styleUrls: ['./ubicaciones.page.scss'],
})
export class UbicacionesPage implements OnInit, AfterViewInit {
  /* mapa: GoogleMap; */

  @ViewChild('maps') mapElement: ElementRef;
  searchAbrir:boolean = false;
  uid: any;
  map: any;

  constructor(
    private _modalCtrl: ModalController,
    private _storageService: StorageServiceService,
    private _geolocation: Geolocation,
    private _futbolInn: FutbolInnService,
    private _navCtrl: NavController,
    private _loading: LoadingController
  ) {

   }

  ngOnInit() {
    this._storageService.cargarData('uid')
    .then( m => {
      console.log(m);
      
      this.uid = m.uid;
    });
    
  }

  async ngAfterViewInit(){

    const position = await this.getCoordenadas();
    mapboxgl.accessToken = 'pk.eyJ1IjoidHlzb24yMSIsImEiOiJja28wZWc2eGUwY3J4Mm9udzgxZ2UyczJtIn0.EL9SXrORqd-RVmxedhJdxQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [position.lng, position.lat],
      zoom: 12
      });

      

      map.on('load', () => {
        map.resize();
        this.ubicacionesMap(map);

      });
      


  }

  


  //funcion  para obtener las coordenadas
  async getCoordenadas(){
    const myLatLng = await this._geolocation.getCurrentPosition();
    console.log(myLatLng);
    
    return {
      lat: myLatLng.coords.latitude,
      lng: myLatLng.coords.longitude,

    }
  }


  //funcion para buscar en el mapa
  onSearchChange( evento:any ){

  }

  //fcuncion para mostrar la informacion del modal de un establecimiento
  async mostrarInfor(){
    const modal = await this._modalCtrl.create({
      component: InformacionPage,

    });
    await modal.present();
  }

  //funcion para abrir search
  abrirSearch(){
    this.searchAbrir = !this.searchAbrir;
  }

  //funciona para obtener todas las ubicaciones de los locales
  async ubicacionesMap(map: any){
    const cargando = await this._loading.create({
      message: 'Cargando mapa'
    });
    await cargando.present();
    let popup;
    this._futbolInn.getUbiaciones()
    .valueChanges().subscribe( m => {
      
      m.forEach( ubicacion => {

        
        const html = `
        <b><h6>${ ubicacion.nomLocal }</h6></b>
        <small>${ ubicacion.ubicacion }</small>
        <small>${ ubicacion.telf.celular }</small>
        <button id=${ ubicacion.id }> saber más</button>
        `;
        popup = new mapboxgl.Popup().setHTML( html );

        new mapboxgl.Marker()
          .setLngLat([ubicacion.latLng.longitude, ubicacion.latLng.latitude])
          .setPopup( popup )
          .addTo(map);
          
          
        cargando.dismiss();

        
        popup.on('open', () => {
          document.getElementById(`${ ubicacion.id }`).addEventListener('click', (e) => {
            this._navCtrl.navigateForward(`/tabs-local/informacion/${ ubicacion.id }`);
            popup.remove();
          });
        });

      });
        
     
    });
    map.off('drag', () => {
      console.log('algo');
      popup.remove();
    });
    map.on('click', () => {
      popup.remove();
    });
    
    
    
  }

  //funcion para obtener las coordenadas
  obtenerPosicion(){
    this._geolocation.watchPosition().subscribe( (m:any) =>{
      console.log(m);
      
     
    });
    
  }

}
