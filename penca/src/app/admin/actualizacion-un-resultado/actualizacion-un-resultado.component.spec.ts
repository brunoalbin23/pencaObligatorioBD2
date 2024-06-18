import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionUnResultadoComponent } from './actualizacion-un-resultado.component';

describe('ActualizacionUnResultadoComponent', () => {
  let component: ActualizacionUnResultadoComponent;
  let fixture: ComponentFixture<ActualizacionUnResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizacionUnResultadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizacionUnResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
