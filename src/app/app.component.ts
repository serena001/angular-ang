import { Component,ElementRef, ViewChild, Renderer} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { TranslationLocaleService } from './common/services/translation-locale.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{	
formname:string;
@Language() lang:string;
	constructor(private route:  ActivatedRoute, 
		private router:Router,
		public locale: LocaleService, 
		public translation:TranslationService){};

		ngOnInit()
		{  
			var language = $( "html" ).attr("lang");
			this.locale.setCurrentLanguage(language);
			console.log("ss" +window.location.href);
			var hrefUrl=location.search;
			console.log("ss" +hrefUrl);
			var urlParamsArry =hrefUrl.replace("?","").split("&");
			var paramArry;
			var paramName="";
			var formNameP="";
			var uuid="";
			var formId="";
			var trackId="";
			var lang="";
			var indexOfEqual=0;
			for(var i=0;i<urlParamsArry.length;i++)
			{
				paramArry=urlParamsArry[i].split("=");
				console.log("paramArry" + paramArry);
				if(paramArry[0]=="formNameP")
				{
					paramName=paramArry[1];
					console.log("formname" + paramName);
				//	break;
				}
				else if(paramArry[0]=="uuid")
				{
					uuid=paramArry[1];
				}
				else if(paramArry[0]=="formId")
				{
					formId=paramArry[1];
				}
				else if(paramArry[0]=="trackId")
				{
					trackId=paramArry[1];
				}
				else if(paramArry[0]=="lang")
				{
					lang=paramArry[1];
				}
				
			}
			console.log("formName12" +paramName);
			// this.route.queryParams.forEach((params: Params) => {
        		//this.formName= params['formName'];
			//	console.log("params" + JSON.stringify(params));
			//	console.log("haa1"+ params['formname']);
			//		this.formname= params['formname'];
 			//	});
			//var test="/industryEn";
			//console.log("haa"+this.formName);
			formNameP="'/" + paramName+ "'";
			console.log("formName" +paramName);
			
			this.router.navigate([eval(formNameP)],{queryParams:{formNameP:paramName,uuid:uuid,formId:formId,trackId:trackId,lang:lang}});		
		} 
}
