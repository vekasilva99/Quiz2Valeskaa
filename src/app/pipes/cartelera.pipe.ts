import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'cartelera'
})
export class CarteleraPipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {

    return values.filter((item) => item.Available);
  }

}
