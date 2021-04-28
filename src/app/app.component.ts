import { Component, OnInit } from '@angular/core';
import { MenuOpt } from './interfaces/interfaces.futbol';
import { FutbolInnService } from './services/futbol-inn.service';
import { StorageServiceService } from './services/storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  
  menuOpt: MenuOpt[] = [];
  ocultarMenu:boolean = false;

  constructor(
    private _serviceFutbol: FutbolInnService,
    private _storage: StorageServiceService
  ) {}

  ngOnInit(){
    this.getMenu();
    this.validarMenu();
  }

  //funcion para mostrar los items del menu
  getMenu(){
    this._serviceFutbol.getMenuOpt()
    .subscribe( menu => {
      console.log(menu);

      this.menuOpt = menu;
      
    });
  }

  //funcion para saber si esta logeado o no
  validarMenu(){
    this._storage.cargarData('uid')
    .then((m) => {
      console.log(m);
      if( m === null){
        this.ocultarMenu = true;
        
      }else{
        this.ocultarMenu = false;

      }

      
    })
    .catch( (e) => {
      console.log(e);
      
      this.ocultarMenu = false;
    });
  }
}
