import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGridCustomPaginationComponent } from './home-grid-custom-pagination.component';

describe('HomeGridCustomPaginationComponent', () => {
  let component: HomeGridCustomPaginationComponent;
  let fixture: ComponentFixture<HomeGridCustomPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGridCustomPaginationComponent]
    });
    fixture = TestBed.createComponent(HomeGridCustomPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
