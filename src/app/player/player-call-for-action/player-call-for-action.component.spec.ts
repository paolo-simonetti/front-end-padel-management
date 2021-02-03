import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCallForActionComponent } from './player-call-for-action.component';

describe('PlayerCallForActionComponent', () => {
  let component: PlayerCallForActionComponent;
  let fixture: ComponentFixture<PlayerCallForActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCallForActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCallForActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
