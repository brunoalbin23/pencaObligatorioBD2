import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoCreadoComponent } from './partido-creado.component';

describe('PartidoCreadoComponent', () => {
  let component: PartidoCreadoComponent;
  let fixture: ComponentFixture<PartidoCreadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidoCreadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartidoCreadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
