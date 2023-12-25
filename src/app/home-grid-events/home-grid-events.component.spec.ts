import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGridEventsComponent } from './home-grid-events.component';

describe('HomeGridEventsComponent', () => {
  let component: HomeGridEventsComponent;
  let fixture: ComponentFixture<HomeGridEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGridEventsComponent]
    });
    fixture = TestBed.createComponent(HomeGridEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
