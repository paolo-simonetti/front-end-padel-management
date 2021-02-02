import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMatchByDateComponent } from './find-match-by-date.component';

describe('FindMatchByDateComponent', () => {
  let component: FindMatchByDateComponent;
  let fixture: ComponentFixture<FindMatchByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMatchByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMatchByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
