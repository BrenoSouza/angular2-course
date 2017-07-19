import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cursos2Component } from './cursos2.component';
import { Cursos2SubComponent } from './cursos2-sub/cursos2-sub.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Cursos2Component, Cursos2SubComponent],

  exports: [
      Cursos2Component
  ]
})
export class Cursos2Module { }
