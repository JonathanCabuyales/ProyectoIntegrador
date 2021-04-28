import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataSlidesInterface, MenuOpt, RespUbicaciones } from '../interfaces/interfaces.futbol';

//importaciones de firebase para obtener los datos
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FutbolInnService {
  private itemcollection: AngularFirestoreCollection<any>;
  ubicaciones: Observable<any[]>;

  constructor(
    private _http: HttpClient,
    private _afs: AngularFirestore
  ) { 

   }

   getSlides(){
     return this._http.get<dataSlidesInterface[]>('/assets/data/dataSlides.json');
   }

   getMenuOpt(){
     return this._http.get<MenuOpt[]>('/assets/data/menuOpt.json');
   }

   getUbiaciones(){
     return this._afs.collection<RespUbicaciones>('ubicaciones');
     
   }
}
