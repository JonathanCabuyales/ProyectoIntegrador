import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabsReService } from '../../services/tabs-re.service';
import { TabsPrincipal, RespUbicaciones } from '../../interfaces/interfaces.futbol';
import { ActivatedRoute } from '@angular/router';
import { FutbolInnService } from '../../services/futbol-inn.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit, AfterViewInit {

  tabsLocal: TabsPrincipal[] = [];
  informacionData: Observable<RespUbicaciones[]>;

  constructor(
    private _modalCtrl  : ModalController,
    private _tabsService: TabsReService,
    private _activatedCtrl: ActivatedRoute,
    private _serviceFutbol: FutbolInnService
  ) { }

  ngOnInit() {
    this.getTabsLocal();
    
    

  }

  ngAfterViewInit(){
    const idcancha= this._activatedCtrl.snapshot.paramMap.get('idcancha');
    this.informacionData = this._serviceFutbol.getEstablecimientobyId( idcancha ).valueChanges();
    this.informacionData.subscribe( console.log );
  }

  cerrarModal(){
      this._modalCtrl.dismiss();
  }

  getTabsLocal(){
    this._tabsService.getTabInformacion()
    .subscribe( tab => {
      console.log(' informacion ' , tab);
      
      this.tabsLocal.push( ...tab );
    })
  }

  

}
