import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComentarioModalPage } from '../comentario-modal/comentario-modal.page';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {
  @Input() modalComentario = false;

  constructor(
    private _modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  cerrarModal(){
    this._modalCtrl.dismiss();
  }

  async abrirComentarios(){
    const modal = await this._modalCtrl.create({
      component: ComentarioModalPage
    });
    await modal.present()

  }

}
