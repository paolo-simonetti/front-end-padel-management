import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForActionByOthersComponent } from './call-for-action-by-others.component';

describe('CallForActionByOthersComponent', () => {
  let component: CallForActionByOthersComponent;
  let fixture: ComponentFixture<CallForActionByOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallForActionByOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForActionByOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
