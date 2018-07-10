import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraPopupComponent } from './hira-popup.component';

describe('HiraPopupComponent', () => {
  let component: HiraPopupComponent;
  let fixture: ComponentFixture<HiraPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiraPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiraPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
