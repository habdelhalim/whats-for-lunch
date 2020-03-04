import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySelectionComponent } from './today-selection.component';

describe('TodaySelectionComponent', () => {
  let component: TodaySelectionComponent;
  let fixture: ComponentFixture<TodaySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
