import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeInsertComponent } from './notice-insert.component';

describe('NoticeInsertComponent', () => {
  let component: NoticeInsertComponent;
  let fixture: ComponentFixture<NoticeInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
