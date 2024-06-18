import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionTorneoComponent } from './actualizacion-torneo.component';

describe('ActualizacionTorneoComponent', () => {
  let component: ActualizacionTorneoComponent;
  let fixture: ComponentFixture<ActualizacionTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizacionTorneoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizacionTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
