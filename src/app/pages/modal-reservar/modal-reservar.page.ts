import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-reservar',
  templateUrl: './modal-reservar.page.html',
  styleUrls: ['./modal-reservar.page.scss'],
})
export class ModalReservarPage implements OnInit {

  constructor(
    private _modalCerrar: ModalController
  ) { }

  ngOnInit() {
  }

  cerrarModalReservar(){
    this._modalCerrar.dismiss();
  }

}
