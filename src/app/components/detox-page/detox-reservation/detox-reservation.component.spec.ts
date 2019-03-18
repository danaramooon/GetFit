import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetoxReservationComponent } from './detox-reservation.component';

describe('DetoxReservationComponent', () => {
  let component: DetoxReservationComponent;
  let fixture: ComponentFixture<DetoxReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetoxReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetoxReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
