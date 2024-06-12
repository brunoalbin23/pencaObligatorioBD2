import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoCreadoComponent } from './torneo-creado.component';

describe('TorneoCreadoComponent', () => {
  let component: TorneoCreadoComponent;
  let fixture: ComponentFixture<TorneoCreadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorneoCreadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TorneoCreadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
