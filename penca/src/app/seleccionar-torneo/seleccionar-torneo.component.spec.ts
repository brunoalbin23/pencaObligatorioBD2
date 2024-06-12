import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarTorneoComponent } from './seleccionar-torneo.component';

describe('SeleccionarTorneoComponent', () => {
  let component: SeleccionarTorneoComponent;
  let fixture: ComponentFixture<SeleccionarTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionarTorneoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionarTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
