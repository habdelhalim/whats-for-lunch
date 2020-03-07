import { TestBed } from '@angular/core/testing';

import { TodaySelectionService } from './todayselection.service';

describe('TodaySelectionService', () => {
  let service: TodaySelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodaySelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
