import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsReService } from '../../services/tabs-re.service';
import { TabsPrincipal } from '../../interfaces/interfaces.futbol';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { HistorialPage } from '../historial/historial.page';
import { ModalReservarPage } from '../modal-reservar/modal-reservar.page';
import { ComentarioPage } from '../comentario/comentario.page';
import { MensajesPage } from '../mensajes/mensajes.page';


@Component({
  selector: 'app-tabs-local',
  templateUrl: './tabs-local.page.html',
  styleUrls: ['./tabs-local.page.scss'],
})
export class TabsLocalPage implements OnInit {

  tabs: Observable<TabsPrincipal[]>;


  
  constructor(
    private _activatedCtrl: ActivatedRoute,
    private _serviceTabs: TabsReService,
    private _modalGlobal: ModalController
  ) { }

  ngOnInit() {
    this.tabs = this._serviceTabs.getTabInformacion();
  }

  //funciones para mostrar los modals
  //funcioones para los modals de informacion
  async showReservasModal(){
    console.log('showReservasModal()');
    const modal = await this._modalGlobal.create({
      component: HistorialPage,
      componentProps: {
        "modalInfo": true
      }
    });
    await modal.present();
    
  }
  async showReservasModalReservar(){
    const modal = await this._modalGlobal.create({
      component: ModalReservarPage
    });

    await modal.present();
    
  }
  async showReservasModalComentarios()  {
    
    const modal = await this._modalGlobal.create({
      component: ComentarioPage,
      componentProps: {
        modalComentario: true
      }
    });

    await modal.present();
    
    
  }
  async showReservasModalMensaje(){
    console.log('showReservasModalMensaje()');
    const modal = await this._modalGlobal.create({
      component: MensajesPage,
      componentProps: {
        modalMensaje: true
      }
    });

    await modal.present();
    
  }

}
