import { isDateValid, isBefore, formatTime } from './dateUtils';

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

describe('isBefore', () => {
  test('with null', () => {
    const result = isBefore(null, null);
    expect(result).toBeFalsy();
  });

  test('compareDate with null', () => {
    const date = new Date('2017-09-18T08:30:00');

    const result = isBefore(date, null);
    expect(result).toBeFalsy();
  });

  test('date with null', () => {
    const compareDate = new Date('2017-09-18T08:30:00');

    const result = isBefore(null, compareDate);
    expect(result).toBeFalsy();
  });

  test('compareDate greater than date', () => {
    const date = new Date('2017-09-18T08:30:00');
    const compareDate = new Date('2017-09-18T08:31:00');

    const result = isBefore(date, compareDate);
    expect(result).toBeFalsy();
  });

  test('compareDate lower than date', () => {
    const date = new Date('2017-09-18T08:35:00');
    const compareDate = new Date('2017-09-18T08:30:00');

    const result = isBefore(date, compareDate);
    expect(result).toBeTruthy();
  });
});

describe('formatTime', () => {
  test('with null', () => {
    const result = formatTime(null);
    expect(result).toBe('');
  });

  test('with date before 12:00', () => {
    const date = new Date('2017-09-18T08:35:00');

    const result = formatTime(date);
    expect(result).toBe('0' + date.getHours() + ':' + date.getMinutes());
  });

  test('with date after 12:00', () => {
    const date = new Date('2017-09-18T13:35:00');

    const result = formatTime(date);
    expect(result).toBe(date.getHours() + ':' + date.getMinutes());
  });
});
