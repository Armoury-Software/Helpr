import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFeaturesComponent } from './dashboard-features.component';

describe('DashboardFeaturesComponent', () => {
  let component: DashboardFeaturesComponent;
  let fixture: ComponentFixture<DashboardFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
