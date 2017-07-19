import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Cursos2Module} from './cursos2/cursos2.module';
import { Cursos2DetalhesComponent } from './cursos2-detalhes/cursos2-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    Cursos2DetalhesComponent
  ],
  imports: [
    BrowserModule, Cursos2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
