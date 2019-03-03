import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    if (activar) {
      const arrnombre = value.split('');
      for (const i in arrnombre) {
        arrnombre[i] = '*';
      }
      const pass = arrnombre.join('');
      return pass;
    }
    return value;
  }

}
