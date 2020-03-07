import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { OrderService } from 'src/app/service/order.service';
import { TodaySelectionService } from 'src/app/service/todayselection.service';
import { AuthService } from 'src/app/service/auth.service';
import { of } from 'rxjs';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    const orderServiceStub = {
      list: () => of([])
    }
    const TodaySelectionStub = {
      getRestaurant: () => of([])
    }
    const AuthServiceStub = {
      getUser: () => of({})
    }

    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      providers: [{ provide: OrderService, useValue: orderServiceStub },
      { provide: TodaySelectionService, useValue: TodaySelectionStub },
      { provide: AuthService, useValue: AuthServiceStub },]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
