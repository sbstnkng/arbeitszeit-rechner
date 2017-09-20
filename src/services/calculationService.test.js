import {
  calculateWorkTime,
  calculateMinWorkTime,
  calculateMaxWorkTime,
  calculateRealWorkTime,
  convertToIndustry
} from './calculationService';

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

describe('calculateRealWorkTime', () => {
  test('with both dates null', () => {
    const result = calculateRealWorkTime(null, null);
    expect(result).toBeNull();
  });

  test('with both dates undefined', () => {
    const result = calculateRealWorkTime(undefined, undefined);
    expect(result).toBeNull();
  });

  test('with start date null', () => {
    const result = calculateRealWorkTime(null, new Date());
    expect(result).toBeNull();
  });

  test('with start date undefined', () => {
    const result = calculateRealWorkTime(undefined, new Date());
    expect(result).toBeNull();
  });

  test('with end date null', () => {
    const result = calculateRealWorkTime(new Date(), null);
    expect(result).toBeNull();
  });

  test('with end date undefined', () => {
    const result = calculateRealWorkTime(new Date(), undefined);
    expect(result).toBeNull();
  });

  test('with time equals 6 hours', () => {
    const startTime = new Date('2017-09-10T06:00:00');
    const endTime = new Date('2017-09-10T12:00:00');

    const result = calculateRealWorkTime(startTime, endTime);
    expect(result.hours).toBe(6);
    expect(result.overtime.toFixed(2)).toBe('-1.60');
  });

  test('with time equals 6.5 hours', () => {
    const startTime = new Date('2017-09-10T06:00:00');
    const endTime = new Date('2017-09-10T12:30:00');

    const result = calculateRealWorkTime(startTime, endTime);
    expect(result.hours).toBe(6);
    expect(result.overtime.toFixed(2)).toBe('-1.60');
  });

  test('with time equals 9 hours', () => {
    const startTime = new Date('2017-09-10T06:00:00');
    const endTime = new Date('2017-09-10T15:30:00');

    const result = calculateRealWorkTime(startTime, endTime);
    expect(result.hours).toBe(9);
    expect(result.overtime.toFixed(2)).toBe('1.40');
  });

  test('with time equals 9.25 hours', () => {
    const startTime = new Date('2017-09-10T06:00:00');
    const endTime = new Date('2017-09-10T15:45:00');

    const result = calculateRealWorkTime(startTime, endTime);
    expect(result.hours).toBe(9);
    expect(result.overtime.toFixed(2)).toBe('1.40');
  });
});

describe('convertToIndustry', () => {
  test('with time null', () => {
    const result = convertToIndustry(null);
    expect(result).toBeNull();
  });

  test('with time undefined', () => {
    const result = convertToIndustry(undefined);
    expect(result).toBeNull();
  });

  test('with time', () => {
    const time = new Date('2017-09-10T08:30:00');

    const result = convertToIndustry(time);
    expect(result).toBe(8.5);
  });
});
