import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantEditComponent } from './restaurant-edit.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';

describe('RestaurantEditComponent', () => {
  let component: RestaurantEditComponent;
  let fixture: ComponentFixture<RestaurantEditComponent>;

  beforeEach(async(() => {
    const afDatabaseStub = {
      list: () => {
        return { snapshotChanges: () => of([]) }
      }
    }

    TestBed.configureTestingModule({
      declarations: [RestaurantEditComponent],
      providers: [{ provide: AngularFireDatabase, useValue: afDatabaseStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
