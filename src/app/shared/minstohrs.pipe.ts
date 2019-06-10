import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minstohrs'
})
export class MinstohrsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let minutes = value % 60;
    let hours = Math.floor(value / 60);
    return hours + " h " + minutes + " m";
  }
}
