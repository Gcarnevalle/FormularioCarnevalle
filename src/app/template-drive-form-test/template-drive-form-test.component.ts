import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-template-drive-form-test',
  templateUrl: './template-drive-form-test.component.html',
  styleUrls: ['./template-drive-form-test.component.scss']
})
export class TemplateDriveFormTestComponent implements OnInit {
  personaModel: Persona;
  constructor() {
    this.personaModel= new Persona();
   }

  ngOnInit(): void {
  }

  submit(val:any){
    console.log(val);
  }

}
