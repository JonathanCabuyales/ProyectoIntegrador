import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalReservarPageRoutingModule } from './modal-reservar-routing.module';

import { ModalReservarPage } from './modal-reservar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalReservarPageRoutingModule
  ],
  declarations: [ModalReservarPage]
})
export class ModalReservarPageModule {}
