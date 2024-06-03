import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediccionRegistroComponent } from './prediccion-registro.component';

describe('PrediccionRegistroComponent', () => {
  let component: PrediccionRegistroComponent;
  let fixture: ComponentFixture<PrediccionRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrediccionRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrediccionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
