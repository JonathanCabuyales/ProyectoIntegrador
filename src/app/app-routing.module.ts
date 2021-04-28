import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'presentacion',
    loadChildren: () => import('./pages/presentacion/presentacion.module').then( m => m.PresentacionPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path:'tabs-local',
    loadChildren: () => import('./pages/tabs-local/tabs-local.module').then( m => m.TabsLocalPageModule)
  },
  {
    path: 'modal-reservar',
    loadChildren: () => import('./pages/modal-reservar/modal-reservar.module').then( m => m.ModalReservarPageModule)
  },
  {
    path: 'comentario',
    loadChildren: () => import('./pages/comentario/comentario.module').then( m => m.ComentarioPageModule)
  },
  {
    path: 'comentario-modal',
    loadChildren: () => import('./pages/comentario-modal/comentario-modal.module').then( m => m.ComentarioModalPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'mensajes-modal',
    loadChildren: () => import('./pages/mensajes-modal/mensajes-modal.module').then( m => m.MensajesModalPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
