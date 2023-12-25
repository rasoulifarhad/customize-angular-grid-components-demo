import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGridOptionPaginationComponent } from './home-grid-option-pagination.component';

describe('HomeGridOptionPaginationComponent', () => {
  let component: HomeGridOptionPaginationComponent;
  let fixture: ComponentFixture<HomeGridOptionPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGridOptionPaginationComponent]
    });
    fixture = TestBed.createComponent(HomeGridOptionPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
