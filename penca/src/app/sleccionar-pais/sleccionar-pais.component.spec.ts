import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleccionarPaisComponent } from './sleccionar-pais.component';

describe('SleccionarPaisComponent', () => {
  let component: SleccionarPaisComponent;
  let fixture: ComponentFixture<SleccionarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SleccionarPaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SleccionarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
