import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetoxAdvantagesComponent } from './detox-advantages.component';

describe('DetoxAdvantagesComponent', () => {
  let component: DetoxAdvantagesComponent;
  let fixture: ComponentFixture<DetoxAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetoxAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetoxAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
