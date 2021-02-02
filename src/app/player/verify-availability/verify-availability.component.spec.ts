import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAvailabilityComponent } from './verify-availability.component';

describe('VerifyAvailabilityComponent', () => {
  let component: VerifyAvailabilityComponent;
  let fixture: ComponentFixture<VerifyAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
