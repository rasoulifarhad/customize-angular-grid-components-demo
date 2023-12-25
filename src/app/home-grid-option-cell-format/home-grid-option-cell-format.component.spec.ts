import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGridOptionCellFormatComponent } from './home-grid-option-cell-format.component';

describe('HomeGridOptionCellFormatComponent', () => {
  let component: HomeGridOptionCellFormatComponent;
  let fixture: ComponentFixture<HomeGridOptionCellFormatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGridOptionCellFormatComponent]
    });
    fixture = TestBed.createComponent(HomeGridOptionCellFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
