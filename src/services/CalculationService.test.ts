import * as moment from 'moment';
import { CalculationService } from './CalculationService';

describe('calculateMinWorkTime', () => {
  let testDate: Date;
  let expectedDate: Date;

  beforeEach(() => {
    testDate = new Date();
    testDate.setUTCHours(8, 34);

    expectedDate = new Date();
    expectedDate.setUTCHours(16, 40);
  });

  it('should calculate the minimum work time', () => {
    const result = CalculationService.calculateMinWorkTime(testDate);
    expect(result).toEqual(expectedDate);
  });

  it('should return undefined, when date is invalid', () => {
    testDate = moment.invalid().toDate();
    const result = CalculationService.calculateMinWorkTime(testDate);
    expect(result).toBeUndefined();
  });
});

describe('calculateMaxWorkTime', () => {
  let testDate: Date;
  let expectedDate: Date;

  beforeEach(() => {
    testDate = new Date();
    testDate.setUTCHours(8, 34);

    expectedDate = new Date();
    expectedDate.setUTCHours(19, 19);
  });

  it('should calculate the maximum work time', () => {
    const result = CalculationService.calculateMaxWorkTime(testDate);
    expect(result).toEqual(expectedDate);
  });

  it('should return undefined, when date is invalid', () => {
    testDate = moment.invalid().toDate();
    const result = CalculationService.calculateMaxWorkTime(testDate);
    expect(result).toBeUndefined();
  });
});
