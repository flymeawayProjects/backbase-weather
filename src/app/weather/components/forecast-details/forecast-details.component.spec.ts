import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { WeatherFacade } from '../../weather.facade';

import { ForecastDetailsComponent } from './forecast-details.component';

describe('ForecastDetailsComponent', () => {
  let component: ForecastDetailsComponent;
  let fixture: ComponentFixture<ForecastDetailsComponent>;

  const WeatherFacadeMock = jasmine.createSpyObj(['fetchForecastWeatherByCity']);
  const ActivatedRouteMock = {
    snapshot: {
      queryParams: { cityName: 'Bangkok' }
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastDetailsComponent],
      providers: [
        { provide: WeatherFacade, useValue: WeatherFacadeMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component with forecast data', () => {
    spyOn(component, 'setForecastData');
    component.ngOnInit();
    expect(component.setForecastData).toHaveBeenCalled();
  });

  it('should fetch forecast weather for expected city from query parameters', () => {
    const expectedCityName = ActivatedRouteMock.snapshot.queryParams.cityName;
    component.setForecastData();
    expect(WeatherFacadeMock.fetchForecastWeatherByCity).toHaveBeenCalledWith(expectedCityName);
  });
});
