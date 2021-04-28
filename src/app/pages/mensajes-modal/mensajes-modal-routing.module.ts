import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesModalPage } from './mensajes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesModalPageRoutingModule {}
