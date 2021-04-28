import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalReservarPage } from './modal-reservar.page';

const routes: Routes = [
  {
    path: '',
    component: ModalReservarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalReservarPageRoutingModule {}
