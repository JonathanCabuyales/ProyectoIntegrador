import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TabsPrincipal } from '../interfaces/interfaces.futbol';

@Injectable({
  providedIn: 'root'
})
export class TabsReService {

  constructor(
    private _http: HttpClient
  ) { }

  getTabsPrincipales(){
    return this._http.get<TabsPrincipal[]>('/assets/data/tabsPrincipal.json');
  }

  getTabInformacion(){
    return this._http.get<TabsPrincipal[]>('/assets/data/tabsLocal.json');
  }
}
