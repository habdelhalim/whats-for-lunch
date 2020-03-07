import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySelectionComponent } from './today-selection.component';
import { TodaySelectionService } from 'src/app/service/todayselection.service';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { of } from 'rxjs';

describe('TodaySelectionComponent', () => {
  let component: TodaySelectionComponent;
  let fixture: ComponentFixture<TodaySelectionComponent>;

  beforeEach(async(() => {
    const serviceStub = {
      getRestaurant: () => of({name: 'first restaurant'})
    }

    const restServiceStub = {
      list: () => of([])
    }

    TestBed.configureTestingModule({
      declarations: [TodaySelectionComponent],
      providers: [
        { provide: TodaySelectionService, useValue: serviceStub },
        { provide: RestaurantService, useValue: restServiceStub },
      ]
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
