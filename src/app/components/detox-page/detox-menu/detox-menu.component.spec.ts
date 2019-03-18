import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetoxMenuComponent } from './detox-menu.component';

describe('DetoxMenuComponent', () => {
  let component: DetoxMenuComponent;
  let fixture: ComponentFixture<DetoxMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetoxMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetoxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
