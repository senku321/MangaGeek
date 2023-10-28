import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalComponent } from './seasonal.component';

describe('SeasonalComponent', () => {
  let component: SeasonalComponent;
  let fixture: ComponentFixture<SeasonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonalComponent]
    });
    fixture = TestBed.createComponent(SeasonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
