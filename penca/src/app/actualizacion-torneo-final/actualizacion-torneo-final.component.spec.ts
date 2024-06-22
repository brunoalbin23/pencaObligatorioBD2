import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionTorneoFinalComponent } from './actualizacion-torneo-final.component';

describe('ActualizacionTorneoFinalComponent', () => {
  let component: ActualizacionTorneoFinalComponent;
  let fixture: ComponentFixture<ActualizacionTorneoFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizacionTorneoFinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizacionTorneoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
