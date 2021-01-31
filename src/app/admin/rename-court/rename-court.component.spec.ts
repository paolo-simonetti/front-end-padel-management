import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameCourtComponent } from './rename-court.component';

describe('RenameCourtComponent', () => {
  let component: RenameCourtComponent;
  let fixture: ComponentFixture<RenameCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenameCourtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
