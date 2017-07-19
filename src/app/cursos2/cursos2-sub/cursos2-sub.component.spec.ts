import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursos2SubComponent } from './cursos2-sub.component';

describe('Cursos2SubComponent', () => {
  let component: Cursos2SubComponent;
  let fixture: ComponentFixture<Cursos2SubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cursos2SubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursos2SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
