import { Component, OnInit ,Input,Injectable} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
declare var $:any;
@Injectable()
export class RemoveSectionService {

  constructor() { }
  removeSection(message:string)
  {     console.log("sdfsdf");
          $(".messageTitle").html("Warning");
          $(".messageBody").html(message);
          $("#messageDialogue").trigger("open.wb-lbx", [ [ { src: "#messageDialogue", type: "inline" } ] ,true]);      
  };
}
