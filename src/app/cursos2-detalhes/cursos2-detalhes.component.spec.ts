import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursos2DetalhesComponent } from './cursos2-detalhes.component';

describe('Cursos2DetalhesComponent', () => {
  let component: Cursos2DetalhesComponent;
  let fixture: ComponentFixture<Cursos2DetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cursos2DetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursos2DetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
