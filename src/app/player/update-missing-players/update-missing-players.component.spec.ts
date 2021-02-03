import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMissingPlayersComponent } from './update-missing-players.component';

describe('UpdateMissingPlayersComponent', () => {
  let component: UpdateMissingPlayersComponent;
  let fixture: ComponentFixture<UpdateMissingPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMissingPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMissingPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
