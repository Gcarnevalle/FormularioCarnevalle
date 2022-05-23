import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.scss']
})
export class ReactiveFormTestComponent implements OnInit {
  formEstudiante!: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formEstudiante=this.fb.group({
      nombre:[''],
      edad:[''],
      curso:['']
    })
  }

  submit(){
    console.log(this.formEstudiante.value);
  }
}
