import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.scss']
})
export class Formulario1Component implements OnInit {
  formularioContacto!: FormGroup;
  @ViewChild('myTestDiv') myTestDiv!:ElementRef;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioContacto=this.fb.group({
      nombre: ['Ricardo', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.email],
      mensaje:['Este es el mensaje', Validators.maxLength(15)]
    })
  }

  submit(){
    console.log(this.formularioContacto.value);
  }

}
