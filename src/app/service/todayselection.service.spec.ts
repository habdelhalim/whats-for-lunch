import { TestBed } from '@angular/core/testing';

import { TodayselectionService } from './todayselection.service';

describe('TodayselectionService', () => {
  let service: TodayselectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodayselectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
