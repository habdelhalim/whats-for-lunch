import { TestBed, async } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async(() => {
    const authStub = {
      signInWithPopup: (provider) => { console.log(provider) }
    }

    TestBed.configureTestingModule({
      providers: [{
        provide: AngularFireAuth, useValue: authStub
      }]
    });
    service = TestBed.inject(AuthService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
