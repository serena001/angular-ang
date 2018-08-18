import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSetCountryProvince]'
})
export class SetCountryProvinceDirective {
@Input() appSetCountryProvince: string;


  constructor() {
      
    }

}
