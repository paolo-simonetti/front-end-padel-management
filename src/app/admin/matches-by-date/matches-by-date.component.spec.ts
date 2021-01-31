import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesByDateComponent } from './matches-by-date.component';

describe('MatchesByDateComponent', () => {
  let component: MatchesByDateComponent;
  let fixture: ComponentFixture<MatchesByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
