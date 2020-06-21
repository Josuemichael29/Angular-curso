import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any[], ...args: any[]): string {
    if (image.length > 0) {
      return image[0].url;
    } else {
      return 'assets/img/original.png';
    }
  }

}
