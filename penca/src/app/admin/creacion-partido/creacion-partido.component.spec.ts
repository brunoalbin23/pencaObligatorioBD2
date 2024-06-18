import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPartidoComponent } from './creacion-partido.component';

describe('CreacionPartidoComponent', () => {
  let component: CreacionPartidoComponent;
  let fixture: ComponentFixture<CreacionPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionPartidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
