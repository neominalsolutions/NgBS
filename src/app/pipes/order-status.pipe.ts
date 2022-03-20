import { Pipe, PipeTransform } from '@angular/core';

// angular service,component gibi farklı bir declarationa sahip
@Pipe({
  name: 'orderStatus',
})
export class OrderStatusPipe implements PipeTransform {
  // value dediğimiz completed dan gelen değerimiz, yani extrandan bilgi farklı değerler de args olarak istediğimiz kadar tanımlanabilir.
  // gelen value değerini transform edip değiştirip istedeiğimiz formatta gösteririz.
  transform(value: string): unknown {
    switch (value) {
      case 'Completed':
        value = 'Sipariş Hazır';
        break;
      case 'Shipped':
        value = 'Kargoya Teslim Edildi';
        break;
      default:
        value = 'Onay Bekleniyor';
        break;
    }

    return value;
  }
}
