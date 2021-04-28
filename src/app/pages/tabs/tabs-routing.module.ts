import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'ubicaciones',
        loadChildren: () => import('../ubicaciones/ubicaciones.module').then( m => m.UbicacionesPageModule),
        
      },
      {
        path: 'historial',
        loadChildren: () => import('../historial/historial.module').then( m => m.HistorialPageModule)
      },
      {
        path: 'reservas-activas',
        loadChildren: () => import('../reservas-activas/reservas-activas.module').then( m => m.ReservasActivasPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
