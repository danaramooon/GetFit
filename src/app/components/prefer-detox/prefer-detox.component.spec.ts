import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferDetoxComponent } from './prefer-detox.component';

describe('PreferDetoxComponent', () => {
  let component: PreferDetoxComponent;
  let fixture: ComponentFixture<PreferDetoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferDetoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferDetoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
