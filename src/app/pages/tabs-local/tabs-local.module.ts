import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsLocalPageRoutingModule } from './tabs-local-routing.module';

import { TabsLocalPage } from './tabs-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsLocalPageRoutingModule
  ],
  declarations: [TabsLocalPage]
})
export class TabsLocalPageModule {}
