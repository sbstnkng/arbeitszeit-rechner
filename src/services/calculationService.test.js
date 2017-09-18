import moment from 'moment';
import {
  isDateValid,
  calculateWorkTime,
  calculateMinWorkTime,
  calculateMaxWorkTime
} from './calculationService';

describe('isDateValid', () => {
  test('with null', () => {
    const result = isDateValid(null);
    expect(result).toBeFalsy();
  });

  test('with undefined', () => {
    const result = isDateValid(undefined);
    expect(result).toBeFalsy();
  });

  test('with letters as invalid date', () => {
    const result = isDateValid('asdf');
    expect(result).toBeFalsy();
  });

  test('with invalid date', () => {
    const result = isDateValid('31.02.2016');
    expect(result).toBeFalsy();
  });

  test('with valid date', () => {
    const result = isDateValid(new Date());
    expect(result).toBeTruthy();
  });

  test('with valid date string', () => {
    const result = isDateValid('2017-09-10');
    expect(result).toBeTruthy();
  });
});

describe('calculateWorkTime', () => {
  test('with date null', () => {
    const result = calculateWorkTime(null, null, null);
    expect(result).toBeNull();
  });

  test('with date undefined', () => {
    const result = calculateWorkTime(undefined, undefined, undefined);
    expect(result).toBeNull();
  });

  test('with date', () => {
    const startTime = new Date('2017-09-18T08:30:00');
    const expectedTime = new Date('2017-09-18T16:40:00');

    const result = calculateWorkTime(startTime, 8, 10);
    expect(result.toISOString()).toBe(expectedTime.toISOString());
  });
});

describe('calculateMinWorkTime', () => {
  test('with date null', () => {
    const result = calculateMinWorkTime(null);
    expect(result).toBeNull();
  });

  test('with date undefined', () => {
    const result = calculateMinWorkTime(undefined);
    expect(result).toBeNull();
  });

  test('with date', () => {
    const startTime = new Date('2017-09-10T08:30:00');
    const expectedTime = new Date('2017-09-10T16:36:00');

    const result = calculateMinWorkTime(startTime);
    expect(result.toISOString()).toBe(expectedTime.toISOString());
  });
});

describe('calculateMaxWorkTime', () => {
  test('with date null', () => {
    const result = calculateMaxWorkTime(null);
    expect(result).toBeNull();
  });

  test('with date undefined', () => {
    const result = calculateMaxWorkTime(undefined);
    expect(result).toBeNull();
  });

  test('with date', () => {
    const startTime = new Date('2017-09-10T08:30:00');
    const expectedTime = new Date('2017-09-10T19:15:00');

    const result = calculateMaxWorkTime(startTime);
    expect(result.toISOString()).toBe(expectedTime.toISOString());
  });
});
