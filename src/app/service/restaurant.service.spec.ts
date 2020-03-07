import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';

TestBed.configureTestingModule({
  providers: [
    { providers: AngularFireDatabase }
  ]
});

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    const afDatabaseStub = {
      list: () => {
        return { snapshotChanges: () => of([]) }
      }
    }

    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireDatabase, useValue: afDatabaseStub }]
    });
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
