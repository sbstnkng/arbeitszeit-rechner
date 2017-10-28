import moment from 'moment';
import { isDateValid } from './dateUtils';

export function calculateMinWorkTime(date) {
  return calculateWorkTime(date, 8, 6);
}

export function calculateMaxWorkTime(date) {
  return calculateWorkTime(date, 10, 45);
}

export function calculateWorkTime(date, hours, minutes) {
  if (!isDateValid(date)) {
    return null;
  }

  const time = moment(date);
  time.add(hours, 'hours').add(minutes, 'minutes');
  return time.toDate();
}

export function calculateRealWorkTime(startTime, endTime) {
  if (!isDateValid(startTime) || !isDateValid(endTime)) {
    return null;
  }

  const start = moment.utc(startTime);
  const result = moment.utc(endTime);
  result.subtract(start.hours(), 'hours').subtract(start.minutes(), 'minutes');

  let timeIndustry = convertToIndustry(result.toDate());

  if (timeIndustry > 6) {
    if (timeIndustry >= 6.5) {
      timeIndustry = timeIndustry - 0.5;
    } else {
      timeIndustry = 6;
    }
  }

  if (timeIndustry > 9) {
    if (timeIndustry >= 9.25) {
      timeIndustry = timeIndustry - 0.25;
    } else {
      timeIndustry = 9;
    }
  }

  return {
    hours: timeIndustry,
    overtime: timeIndustry - 7.6
  };
}

export function convertToIndustry(time) {
  if (!isDateValid(time)) {
    return null;
  }

  const momentTime = moment.utc(time);
  const hours = momentTime.hours();
  const minutes = momentTime.minutes();

  return hours + minutes / 60;
}

export function convertFromIndustry(industryTime) {
  if (industryTime === null || industryTime === undefined) {
    return null;
  }

  const hours = parseInt(industryTime, 10);
  const minutes = (industryTime - hours) * 100 / 5 * 3;

  const time = moment();
  time.hours(hours);
  time.minutes(minutes);
  return time.toDate();
}
