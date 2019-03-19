import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFitComponent } from './get-fit.component';

describe('GetFitComponent', () => {
  let component: GetFitComponent;
  let fixture: ComponentFixture<GetFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
