import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadelmatchComponent } from './padelmatch.component';

describe('PadelmatchComponent', () => {
  let component: PadelmatchComponent;
  let fixture: ComponentFixture<PadelmatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadelmatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadelmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
