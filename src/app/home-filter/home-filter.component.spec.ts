import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilterComponent } from './home-filter.component';

describe('HomeFilterComponent', () => {
  let component: HomeFilterComponent;
  let fixture: ComponentFixture<HomeFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFilterComponent]
    });
    fixture = TestBed.createComponent(HomeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
