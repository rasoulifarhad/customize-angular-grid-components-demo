import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStaticComponent } from './home-static.component';

describe('HomeStaticComponent', () => {
  let component: HomeStaticComponent;
  let fixture: ComponentFixture<HomeStaticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStaticComponent]
    });
    fixture = TestBed.createComponent(HomeStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
