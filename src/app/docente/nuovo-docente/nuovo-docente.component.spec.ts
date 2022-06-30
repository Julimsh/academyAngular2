import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoDocenteComponent } from './nuovo-docente.component';

describe('NuovoDocenteComponent', () => {
  let component: NuovoDocenteComponent;
  let fixture: ComponentFixture<NuovoDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoDocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
