import { Pipe, PipeTransform } from '@angular/core';
import { semana } from '../interfaces/interfaces.futbol';

@Pipe({
  name: 'horario'
})
export class HorarioPipe implements PipeTransform {

  transform(Semana: semana[]): semana[] {
    console.log(Semana);
    
    return Semana;
  }

}
