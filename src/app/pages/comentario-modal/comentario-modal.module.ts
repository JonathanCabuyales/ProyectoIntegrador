import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarioModalPageRoutingModule } from './comentario-modal-routing.module';

import { ComentarioModalPage } from './comentario-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarioModalPageRoutingModule
  ],
  declarations: [ComentarioModalPage]
})
export class ComentarioModalPageModule {}
