import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measureUnit'
})
export class MeasureUnitPipe implements PipeTransform {

  transform(value: string | number, ...args: unknown[]): unknown {
    let finalValue: string | number = value;

    switch (args[0]) {
      case AvailableUnits.CELCIUS: {
        finalValue = value + String.fromCharCode(MEASURE_UNIT.CELCIUS);
        break;
      }
      case AvailableUnits.KPH: {
        finalValue = value + MEASURE_UNIT.KPH;
        break;
      }
    }

    return finalValue;
  }
}

enum AvailableUnits {
  CELCIUS = 'celcius',
  KPH = 'kph'
}

const MEASURE_UNIT = {
  CELCIUS: 0x2103,
  KPH: 'km/h'
}
