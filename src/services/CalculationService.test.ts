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
    testDate.setUTCHours(8, 0);

    expectedDate = new Date();
    expectedDate.setUTCHours(18, 45);
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

describe('calculateActualWorkTime', () => {
  let startDate: Date;
  let endDate: Date;
  let expectedDate: Date;

  beforeEach(() => {
    startDate = new Date();
    endDate = new Date();
    expectedDate = new Date();
  });

  it('should return undefined, when start date is invalid', () => {
    startDate = moment.invalid().toDate();
    const result = CalculationService.calculateActualWorkTime(
      startDate,
      endDate
    );
    expect(result).toBeUndefined();
  });

  it('should return undefined, when end date is invalid', () => {
    endDate = moment.invalid().toDate();
    const result = CalculationService.calculateActualWorkTime(
      startDate,
      endDate
    );
    expect(result).toBeUndefined();
  });

  it('should calculate the actual work time', () => {
    startDate.setUTCHours(8, 0, 0, 0);
    endDate.setUTCHours(16, 6, 0, 0);
    expectedDate.setUTCHours(7, 36, 0, 0);

    const result = CalculationService.calculateActualWorkTime(
      startDate,
      endDate
    );
    expect(result).toEqual(expectedDate);
  });

  it('should calculate the actual work time without 30 minutes break time', () => {
    startDate.setUTCHours(8, 0, 0, 0);
    endDate.setUTCHours(16, 36, 0, 0);
    expectedDate.setUTCHours(8, 6, 0, 0);

    const result = CalculationService.calculateActualWorkTime(
      startDate,
      endDate
    );
    expect(result).toEqual(expectedDate);
  });

  it('should calculate the actual work time without 45 minutes break time', () => {
    startDate.setUTCHours(8, 0, 0, 0);
    endDate.setUTCHours(17, 46, 0, 0);
    expectedDate.setUTCHours(9, 1, 0, 0);

    const result = CalculationService.calculateActualWorkTime(
      startDate,
      endDate
    );
    expect(result).toEqual(expectedDate);
  });
});

describe('calculateOverime', () => {
  let startDate: Date;
  let endDate: Date;
  let expectedDate: Date;

  beforeEach(() => {
    startDate = new Date();
    endDate = new Date();
    expectedDate = new Date();
  });

  it('should return undefined, when start date is invalid', () => {
    startDate = moment.invalid().toDate();
    const result = CalculationService.calculateOvertime(startDate, endDate);
    expect(result).toBeUndefined();
  });

  it('should return undefined, when end date is invalid', () => {
    endDate = moment.invalid().toDate();
    const result = CalculationService.calculateOvertime(startDate, endDate);
    expect(result).toBeUndefined();
  });

  it('should be 0 when there is no overtime done', () => {
    startDate.setUTCHours(8, 0, 0, 0);
    endDate.setUTCHours(16, 6, 0, 0);
    expectedDate.setUTCHours(0, 0, 0, 0);

    const result = CalculationService.calculateOvertime(startDate, endDate);
    expect(result).toEqual(expectedDate);
  });

  it('should calculate a positiv overtime right', () => {
    startDate.setUTCHours(8, 0, 0, 0);
    endDate.setUTCHours(16, 36, 0, 0);
    expectedDate.setUTCHours(0, 30, 0, 0);

    const result = CalculationService.calculateOvertime(startDate, endDate);
    expect(result).toEqual(expectedDate);
  });

  it('should calculate a negative overtime right', () => {
    startDate.setUTCHours(8, 30, 0, 0);
    endDate.setUTCHours(16, 6, 0, 0);
    expectedDate.setUTCHours(0, 30, 0, 0);
    expectedDate.setDate(expectedDate.getDate() - 1);

    const result = CalculationService.calculateOvertime(startDate, endDate);
    expect(result).toEqual(expectedDate);
  });
});

describe('isWorkTimePositive', () => {
  let startDate: Date;
  let endDate: Date;

  beforeEach(() => {
    startDate = new Date();
    endDate = new Date();
  });

  it('should return undefined, when start date is invalid', () => {
    startDate = moment.invalid().toDate();
    const result = CalculationService.isWorkTimePositive(startDate, endDate);
    expect(result).toBeUndefined();
  });

  it('should return undefined, when end date is invalid', () => {
    endDate = moment.invalid().toDate();
    const result = CalculationService.isWorkTimePositive(startDate, endDate);
    expect(result).toBeUndefined();
  });

  it('should be true when the minimum work time is completed', () => {
    startDate.setUTCHours(8, 0, 0, 0);
    endDate.setUTCHours(16, 6, 0, 0);

    const result = CalculationService.isWorkTimePositive(startDate, endDate);
    expect(result).toEqual(true);
  });

  it('should be true when there is overtime done', () => {
    startDate.setUTCHours(8, 0, 0, 0);
    endDate.setUTCHours(16, 36, 0, 0);

    const result = CalculationService.isWorkTimePositive(startDate, endDate);
    expect(result).toEqual(true);
  });

  it('should be false when the minimum work time has not been completed', () => {
    startDate.setUTCHours(8, 30, 0, 0);
    endDate.setUTCHours(16, 6, 0, 0);

    const result = CalculationService.isWorkTimePositive(startDate, endDate);
    expect(result).toEqual(false);
  });
});
