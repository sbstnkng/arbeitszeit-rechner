import * as moment from 'moment';
import { TimeUtility } from './TimeUtility';

describe('toTime', () => {
  let testDate: Date;
  let expectedTime: String;

  beforeEach(() => {
    testDate = new Date();
    testDate.setUTCHours(8, 34);

    expectedTime = '08:34';
  });

  it('should format the utc date to the right string format', () => {
    const result = TimeUtility.toTime(testDate);
    expect(result).toBe(expectedTime);
  });

  it('should return an empty String, when date is invalid', () => {
    testDate = moment.invalid().toDate();
    const result = TimeUtility.toTime(testDate);
    expect(result).toBe('');
  });
});

describe('toIndustrialTime', () => {
  let testDate: Date;
  let expectedIndustrialTime: String;

  beforeEach(() => {
    testDate = new Date();
    testDate.setUTCHours(8, 34);

    expectedIndustrialTime = '8.57';
  });

  it('should convert the utc date to industrial time', () => {
    const result = TimeUtility.toIndustrialTime(testDate);
    expect(result).toBe(expectedIndustrialTime);
  });

  it('should return an empty String, when date is invalid', () => {
    testDate = moment.invalid().toDate();
    const result = TimeUtility.toIndustrialTime(testDate);
    expect(result).toBe('');
  });
});
