import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammForhealthComponent } from './programm-forhealth.component';

describe('ProgrammForhealthComponent', () => {
  let component: ProgrammForhealthComponent;
  let fixture: ComponentFixture<ProgrammForhealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammForhealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammForhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
