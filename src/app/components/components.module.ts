import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { TabsReutilizablesComponent } from './tabs-reutilizables/tabs-reutilizables.component';
import { CmodalComponent } from './cmodal/cmodal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TabsReutilizablesComponent,
    CmodalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    TabsReutilizablesComponent,
    CmodalComponent
  ]
})
export class ComponentsModule { }
