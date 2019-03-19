import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammsPageComponent } from './programms-page.component';

describe('ProgrammsPageComponent', () => {
  let component: ProgrammsPageComponent;
  let fixture: ComponentFixture<ProgrammsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
