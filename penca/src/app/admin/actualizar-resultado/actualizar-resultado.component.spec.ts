import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarResultadoComponent } from './actualizar-resultado.component';

describe('ActualizarResultadoComponent', () => {
  let component: ActualizarResultadoComponent;
  let fixture: ComponentFixture<ActualizarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarResultadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
