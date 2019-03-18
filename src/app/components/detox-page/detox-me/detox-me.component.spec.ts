import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetoxMeComponent } from './detox-me.component';

describe('DetoxMeComponent', () => {
  let component: DetoxMeComponent;
  let fixture: ComponentFixture<DetoxMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetoxMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetoxMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
