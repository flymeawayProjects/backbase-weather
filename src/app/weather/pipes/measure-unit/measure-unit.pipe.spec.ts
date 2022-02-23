import { MeasureUnitPipe } from "./measure-unit.pipe";

describe('MeasureUnitPipe', () => {
  let pipe: MeasureUnitPipe;

  beforeEach(() => {
    pipe = new MeasureUnitPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same value if args are not specified', () => {
    const testValue = 'ThisValueIsNotChanged';

    expect(pipe.transform(testValue)).toEqual(testValue);
  });

  it('should add kph unit to value if "kph" arg is passed', () => {
    const testValue = "10";
    const expectedValue = '10km/h';
    const kphParam = 'kph';

    expect(pipe.transform(testValue, kphParam)).toEqual(expectedValue);
  });

  it('should add celcius sign to value if "celcius" arg is passed', () => {
    const testValue = "10";
    const celciusCharCode = 0x2103;
    const expectedValue = '10' + String.fromCharCode(celciusCharCode);
    const celciusParam = 'celcius';

    expect(pipe.transform(testValue, celciusParam)).toEqual(expectedValue);
  });
});
