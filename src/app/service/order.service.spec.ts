import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    const afDatabaseStub = {
      list: () => {
        return { snapshotChanges: () => of([]) }
      }
    }

    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireDatabase, useValue: afDatabaseStub }]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
