import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfeComponent } from './sfe.component';

describe('SfeComponent', () => {
  let component: SfeComponent;
  let fixture: ComponentFixture<SfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
