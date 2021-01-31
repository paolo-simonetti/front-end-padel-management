import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCourtComponent } from './insert-court.component';

describe('InsertCourtComponent', () => {
  let component: InsertCourtComponent;
  let fixture: ComponentFixture<InsertCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCourtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
