import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, MockPipe } from 'ng-mocks';
import { ForecastDataMock } from '../../constans/mock.test';
import { MeasureUnitPipe } from '../../pipes/measure-unit/measure-unit.pipe';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';

import { ForecastDetailsItemComponent } from './forecast-details-item.component';

describe('ForecastDetailsItemComponent', () => {
  let component: ForecastDetailsItemComponent;
  let fixture: ComponentFixture<ForecastDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ForecastDetailsItemComponent,
        MockPipe(MeasureUnitPipe),
        MockComponent(WeatherIconComponent),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastDetailsItemComponent);
    component = fixture.componentInstance;
    component.forecastDetails = ForecastDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
