import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { dataSlidesInterface } from 'src/app/interfaces/interfaces.futbol';
import { FutbolInnService } from 'src/app/services/futbol-inn.service';
import { StorageServiceService } from '../../services/storage-service.service';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {
  slidesData: dataSlidesInterface[] = [];

  constructor(
    private _serviceFutbol: FutbolInnService,
    private _storageService: StorageServiceService,
    private _route: Router
  ) { 


   }

  ngOnInit() {
    
    this.getSlides();

  }


  //funcion para crear de manera dinamica los slides
  getSlides(){
    this._serviceFutbol.getSlides()
    .subscribe( slides => {
      console.log(slides);
      this.slidesData = slides;
    });
  }

  //funcion para omitir las presentaciones si ya ha iniciado sesion
  omitirPresentaciones(){
    this._storageService.guardarData('skipPresentacion', true);
    this._route.navigateByUrl('/tabs/ubicaciones');
  }

}
