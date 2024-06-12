import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoActualizadoComponent } from './resultado-actualizado.component';

describe('ResultadoActualizadoComponent', () => {
  let component: ResultadoActualizadoComponent;
  let fixture: ComponentFixture<ResultadoActualizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoActualizadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadoActualizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
