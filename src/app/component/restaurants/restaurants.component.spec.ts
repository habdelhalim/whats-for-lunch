import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsComponent } from './restaurants.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;

  beforeEach(async(() => {
    const afDatabaseStub = {
      list: () => {
        return { snapshotChanges: () => of([]) }
      }
    }

    TestBed.configureTestingModule({
      declarations: [RestaurantsComponent],
      providers: [{ provide: AngularFireDatabase, useValue: afDatabaseStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
