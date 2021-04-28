import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsLocalPage } from './tabs-local.page';

const routes: Routes = [
  {
    path: '',
    component: TabsLocalPage,
    children: [
      {
        path: 'informacion/:idcancha',
        loadChildren: () => import('../informacion/informacion.module').then( m => m.InformacionPageModule),
        
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsLocalPageRoutingModule {}
