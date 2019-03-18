import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetoxPageComponent } from './detox-page.component';

describe('DetoxPageComponent', () => {
  let component: DetoxPageComponent;
  let fixture: ComponentFixture<DetoxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetoxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
