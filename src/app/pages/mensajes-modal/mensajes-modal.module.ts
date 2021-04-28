import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesModalPageRoutingModule } from './mensajes-modal-routing.module';

import { MensajesModalPage } from './mensajes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesModalPageRoutingModule
  ],
  declarations: [MensajesModalPage]
})
export class MensajesModalPageModule {}
