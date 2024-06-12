import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredecirResultadoComponent } from './predecir-resultado.component';

describe('PredecirResultadoComponent', () => {
  let component: PredecirResultadoComponent;
  let fixture: ComponentFixture<PredecirResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredecirResultadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredecirResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
