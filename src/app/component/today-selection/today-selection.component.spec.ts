import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySelectionComponent } from './today-selection.component';
import { TodaySelectionService } from 'src/app/service/todayselection.service';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { of } from 'rxjs';
import { Restaurant } from 'src/app/model/restaurant';

describe('TodaySelectionComponent', () => {
  let component: TodaySelectionComponent;
  let fixture: ComponentFixture<TodaySelectionComponent>;

  beforeEach(async(() => {
    const rest: Restaurant = {
      id: '232432',
      name: 'first'
    }

    const serviceStub = {
      getRestaurant: () => of([rest])
    }

    const restServiceStub = {
      list: () => {
        return of([]);
      }
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
