import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionResultadoComponent } from './actualizacion-resultado.component';

describe('ActualizacionResultadoComponent', () => {
  let component: ActualizacionResultadoComponent;
  let fixture: ComponentFixture<ActualizacionResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizacionResultadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizacionResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
