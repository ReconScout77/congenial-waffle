import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFromWorkComponent } from './hr-from-work.component';

describe('HrFromWorkComponent', () => {
  let component: HrFromWorkComponent;
  let fixture: ComponentFixture<HrFromWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrFromWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFromWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
