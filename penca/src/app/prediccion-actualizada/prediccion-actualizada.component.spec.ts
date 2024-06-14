import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediccionActualizadaComponent } from './prediccion-actualizada.component';

describe('PrediccionActualizadaComponent', () => {
  let component: PrediccionActualizadaComponent;
  let fixture: ComponentFixture<PrediccionActualizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrediccionActualizadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrediccionActualizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
