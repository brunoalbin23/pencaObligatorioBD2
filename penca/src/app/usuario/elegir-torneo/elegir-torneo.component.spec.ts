import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirTorneoComponent } from './elegir-torneo.component';

describe('ElegirTorneoComponent', () => {
  let component: ElegirTorneoComponent;
  let fixture: ComponentFixture<ElegirTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElegirTorneoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElegirTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
