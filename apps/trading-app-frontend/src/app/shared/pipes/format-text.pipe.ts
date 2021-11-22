import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: string): string {
    return <string>value.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g)?.join(' ').toUpperCase();
  }

}
