import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammWeightlossComponent } from './programm-weightloss.component';

describe('ProgrammWeightlossComponent', () => {
  let component: ProgrammWeightlossComponent;
  let fixture: ComponentFixture<ProgrammWeightlossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammWeightlossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammWeightlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
