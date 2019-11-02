import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soon'
})
export class SoonPipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {

    return values.filter((item) => item.ComingSoon);
  }

}
