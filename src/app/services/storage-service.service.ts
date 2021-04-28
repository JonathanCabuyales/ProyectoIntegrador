import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor(
    private _storage: Storage
  ) { 
    this.init();
  }
  async init(){
    await this._storage.create();
  }

  guardarData(key:string, value:any){
    return this._storage.set( key, value);
  }

  cargarData( key: string){
    return this._storage.get( key );
  }
  limpiarStorage(){
  }
}
