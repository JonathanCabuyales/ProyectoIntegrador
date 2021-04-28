import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasActivasPageRoutingModule } from './reservas-activas-routing.module';

import { ReservasActivasPage } from './reservas-activas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasActivasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReservasActivasPage]
})
export class ReservasActivasPageModule {}
