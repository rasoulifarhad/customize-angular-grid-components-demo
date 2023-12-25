import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGridOptionCellRendererComponent } from './home-grid-option-cell-renderer.component';

describe('HomeGridOptionCellRendererComponent', () => {
  let component: HomeGridOptionCellRendererComponent;
  let fixture: ComponentFixture<HomeGridOptionCellRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGridOptionCellRendererComponent]
    });
    fixture = TestBed.createComponent(HomeGridOptionCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
