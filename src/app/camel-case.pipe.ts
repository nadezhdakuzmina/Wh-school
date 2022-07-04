import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.split(" ").map(
      (word) => word.split("").map((letter, index) => {
        if (!(index % 2)) {
          return letter.toUpperCase()
        }

        return letter;
      }).join('')
    ).join(' ');
  }

}
