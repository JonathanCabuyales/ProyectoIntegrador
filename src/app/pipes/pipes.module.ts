import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioPipe } from './horario.pipe';



@NgModule({
  declarations: [
    HorarioPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ HorarioPipe ]
})
export class PipesModule { }
