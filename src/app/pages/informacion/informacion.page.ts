import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabsReService } from '../../services/tabs-re.service';
import { TabsPrincipal } from '../../interfaces/interfaces.futbol';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  tabsLocal: TabsPrincipal[] = [];

  constructor(
    private _modalCtrl  : ModalController,
    private _tabsService: TabsReService,
    private _activatedCtrl: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTabsLocal();
    const idcancha= this._activatedCtrl.snapshot.paramMap.get('idcancha');
    console.log(idcancha);
    
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
