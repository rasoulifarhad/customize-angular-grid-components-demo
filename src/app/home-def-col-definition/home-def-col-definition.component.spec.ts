import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDefColDefinitionComponent } from './home-def-col-definition.component';

describe('HomeDefColDefinitionComponent', () => {
  let component: HomeDefColDefinitionComponent;
  let fixture: ComponentFixture<HomeDefColDefinitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDefColDefinitionComponent]
    });
    fixture = TestBed.createComponent(HomeDefColDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
