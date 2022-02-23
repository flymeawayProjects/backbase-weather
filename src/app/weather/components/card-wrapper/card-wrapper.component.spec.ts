import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherFacade } from '../../weather.facade';

import { CardWrapperComponent } from './card-wrapper.component';

describe('CardWrapperComponent', () => {
  let component: CardWrapperComponent;
  let fixture: ComponentFixture<CardWrapperComponent>;

  const WeatherFacadeMock = jasmine.createSpyObj(['fetchAllCities']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardWrapperComponent],
      providers: [
        { provide: WeatherFacade, useValue: WeatherFacadeMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch weathers on init', () => {
    spyOn(component, 'setWeatherData');
    component.ngOnInit();

    expect(component.setWeatherData).toHaveBeenCalled();
  });

  it('should fetch weather for available cities', () => {
    const expectedCities = ['Bangkok', 'Pattaya', 'Phuket'];
    Object.defineProperty(component, 'availableCities', { value: expectedCities });
    component.setWeatherData();
    expect(WeatherFacadeMock.fetchAllCities).toHaveBeenCalledWith(expectedCities);
  });
});
