import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { RouterModule, Routes } from '@angular/router';
import { WeatherFacade } from './weather.facade';
import { WeatherApi } from './api/weather.api';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { ForecastDetailsComponent } from './components/forecast-details/forecast-details.component';
import { ForecastDetailsItemComponent } from './components/forecast-details-item/forecast-details-item.component';
import { MeasureUnitPipe } from './pipes/measure-unit/measure-unit.pipe';

const routes: Routes = [
  {
    path: '',
    component: CardWrapperComponent,
  },
  {
    path: 'details',
    component: ForecastDetailsComponent
  }
];

@NgModule({
  declarations: [
    WeatherCardComponent,
    CardWrapperComponent,
    WeatherIconComponent,
    ForecastDetailsComponent,
    ForecastDetailsItemComponent,
    MeasureUnitPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    WeatherApi,
    WeatherFacade
  ]
})
export class WeatherModule { }
