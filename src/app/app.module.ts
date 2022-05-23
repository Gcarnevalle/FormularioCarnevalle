import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroformComponent } from './heroform/heroform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario1Component } from './formulario1/formulario1.component';
import { TemplateDriveFormTestComponent } from './template-drive-form-test/template-drive-form-test.component';
import { ReactiveFormTestComponent } from './reactive-form-test/reactive-form-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroformComponent,
    Formulario1Component,
    TemplateDriveFormTestComponent,
    ReactiveFormTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
