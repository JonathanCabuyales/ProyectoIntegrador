import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mensajes-modal',
  templateUrl: './mensajes-modal.page.html',
  styleUrls: ['./mensajes-modal.page.scss'],
})
export class MensajesModalPage implements OnInit {
  

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  cerrarModal(){
    this._modal.dismiss();
  }

}
