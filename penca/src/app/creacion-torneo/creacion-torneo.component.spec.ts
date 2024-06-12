import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionTorneoComponent } from './creacion-torneo.component';

describe('CreacionTorneoComponent', () => {
  let component: CreacionTorneoComponent;
  let fixture: ComponentFixture<CreacionTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionTorneoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
