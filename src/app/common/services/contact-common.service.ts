import { Injectable } from '@angular/core';
import { lstCountries } from './contactCommonDrpDown';
import { lstProvinces } from './contactCommonDrpDown';
import { lstStates } from './contactCommonDrpDown';

@Injectable()
export class ContactCommonService {

  constructor() { }
 getLstCountries():Promise<any> {
    return Promise.resolve(lstCountries);

  }
  getLstProvinces():Promise<any> {
    return Promise.resolve(lstProvinces);

  }
  getLstStates():Promise<any> {
    return Promise.resolve(lstStates);

  }  
}
