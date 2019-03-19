import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammHelpComponent } from './programm-help.component';

describe('ProgrammHelpComponent', () => {
  let component: ProgrammHelpComponent;
  let fixture: ComponentFixture<ProgrammHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
