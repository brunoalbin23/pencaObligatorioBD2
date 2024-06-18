import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPartidoComponent } from './ingresar-partido.component';

describe('IngresarPartidoComponent', () => {
  let component: IngresarPartidoComponent;
  let fixture: ComponentFixture<IngresarPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresarPartidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
