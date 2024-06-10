import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaGeneralComponent } from './sala-general.component';

describe('SalaGeneralComponent', () => {
  let component: SalaGeneralComponent;
  let fixture: ComponentFixture<SalaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
