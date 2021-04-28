import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MensajesModalPage } from '../mensajes-modal/mensajes-modal.page';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  @Input() modalMensaje = false;
  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  cerrarModal(){
    this._modal.dismiss();
  }

  async abrirMensaje(){
    const modal = await this._modal.create({
      component: MensajesModalPage
    });

    await modal.present();
  }

  async showMensaje(){
    const modal = await this._modal.create({
      component: MensajesModalPage
    });

    await modal.present();
  }
}
