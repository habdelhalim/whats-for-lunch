import { TestBed } from '@angular/core/testing';

import { TodaySelectionService } from './todayselection.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';

describe('TodaySelectionService', () => {
  let service: TodaySelectionService;

  beforeEach(() => {
    const afDatabaseStub = {
      list: () => {
        return { snapshotChanges: () => of([]) }
      }
    }

    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireDatabase, useValue: afDatabaseStub }]
    });
    service = TestBed.inject(TodaySelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
