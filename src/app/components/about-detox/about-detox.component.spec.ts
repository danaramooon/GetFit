import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetoxComponent } from './about-detox.component';

describe('AboutDetoxComponent', () => {
  let component: AboutDetoxComponent;
  let fixture: ComponentFixture<AboutDetoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDetoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDetoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
