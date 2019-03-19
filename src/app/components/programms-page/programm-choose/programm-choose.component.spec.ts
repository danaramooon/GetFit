import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammChooseComponent } from './programm-choose.component';

describe('ProgrammChooseComponent', () => {
  let component: ProgrammChooseComponent;
  let fixture: ComponentFixture<ProgrammChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
