import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionResultRenderer } from './mission-result-renderer.component';

describe('MissionResultRendererComponent', () => {
  let component: MissionResultRenderer;
  let fixture: ComponentFixture<MissionResultRenderer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionResultRenderer]
    });
    fixture = TestBed.createComponent(MissionResultRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
