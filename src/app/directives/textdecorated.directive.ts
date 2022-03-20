import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

// Not: Directivelerin Pipe gibi htmlleri yok. sadece varolan bir html elemente özellik kazandırmayı sağlarlar. Pipe bir verinin formatını değiştiriken, directive ise bir elementi göreslini değiştirmemizi sağlar.

@Directive({
  selector: '[textDecorated]',
})
export class TextdecoratedDirective implements OnInit {
  // constuctor üzerinden element referans ulaşır ve bu elementi js ile özellikler uygularız

  @Input() text: string = '';

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.textDecoration = 'underline';
    this.element.nativeElement.style.fontSize = '32px';
  }

  // eğer dışarıdan bir input ile veri gönderiyorsak bu durumda ngOnint içerisinde bu işlemi yapmalıyız.
  ngOnInit(): void {
    console.log('textContent', this.text);
    if (this.text != '') {
      this.element.nativeElement.textContent = this.text;
    }
  }

  @HostListener('mouseover') // interaktif etkileşim özelliği kazandırdık.
  MouseOver() {
    this.element.nativeElement.style.backgroundColor = 'red';
    this.element.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') // HostListener ile bir html eventi elemente bağlayı bu elemente müdehale etmemizi sağlıyoruz.
  // Method üzerine HostListener olarak yazılarak yapılır.
  MouseLeave() {
    this.element.nativeElement.removeAttribute('style');
    this.element.nativeElement.style.textDecoration = 'underline';
    this.element.nativeElement.style.fontSize = '32px';
  }
}
