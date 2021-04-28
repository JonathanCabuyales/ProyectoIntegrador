import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentarioModalPage } from './comentario-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ComentarioModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentarioModalPageRoutingModule {}
