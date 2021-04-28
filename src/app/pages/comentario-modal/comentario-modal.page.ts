import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comentario-modal',
  templateUrl: './comentario-modal.page.html',
  styleUrls: ['./comentario-modal.page.scss'],
})
export class ComentarioModalPage implements OnInit {

  constructor(
    private _modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  cerrarModal(){
    this._modalCtrl.dismiss();
  }

}
