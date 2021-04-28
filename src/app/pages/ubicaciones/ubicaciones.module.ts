import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionesPageRoutingModule } from './ubicaciones-routing.module';

import { UbicacionesPage } from './ubicaciones.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UbicacionesPage]
})
export class UbicacionesPageModule {}
