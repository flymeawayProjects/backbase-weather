import { Component, Input, OnInit } from '@angular/core';
import { ICON_API, ICON_SUFFIX } from '../../constans/config';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {

  private _path!: string;
  private _isFullWidth!: boolean;

  readonly API = ICON_API;
  readonly SUFFIX = ICON_SUFFIX;

  @Input() icon!: string;
  @Input('fullWidth') set isFullWidth(value: boolean) {
    this._isFullWidth = value;
  }

  constructor() { }

  ngOnInit(): void {
    this.createPath();
  }

  createPath(): void {
    this._path = this.API + this.icon + this.SUFFIX;
  }

  get isFullWidth(): boolean {
    return this._isFullWidth;
  }

  get path(): string {
    return this._path;
  }
}
