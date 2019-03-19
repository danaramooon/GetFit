import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammForveganComponent } from './programm-forvegan.component';

describe('ProgrammForveganComponent', () => {
  let component: ProgrammForveganComponent;
  let fixture: ComponentFixture<ProgrammForveganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammForveganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammForveganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
