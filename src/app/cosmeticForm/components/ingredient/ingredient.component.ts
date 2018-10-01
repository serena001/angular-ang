import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { IngredientService } from '../../../common/services/ingredient.service';
import { Observable, of } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
@Input('group')
public ingredientsFrmGrp:FormGroup;
@Input('index')
public index:string;
@Language() lang:string;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }
 // searchIngredient(value,$index)
 // {

//  }
  /**
initContact()
	{
		//return this._fb.group({ fullName: ['luke skywalker 222', Validators.required]});
		return this._fb.group({"contact":{ fullName: 'luke skywalker 222'}});
	}	
 getContacts(): ContactInterface[] {
    return CONTACTS;
 }
  getContacts1 (): Observable<ContactInterface[]> {
    return this.http.get(this.contactsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log("body"+JSON.stringify(body));
    return body; 
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  addContacts (name: string): Observable<ContactInterface> {
  //  let headers = new Headers({ 'Content-Type': 'application/json' });
  //  let options = new RequestOptions({ headers: headers });
var url ="http://10.224.4.20:20170/cosmetic/api/v1/substance/findSubstance?name="+name;
    //return this.http.post(this.contactsUrl, { name }, options)
    return this.http.get(url,{})
                    .map(this.extractData)
                    .catch(this.handleError);
  }*/

}
