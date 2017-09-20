import moment from 'moment';

export function isDateValid(date) {
  return date !== null && date !== undefined && moment(date).isValid();
}

export function isBefore(date, compareDate) {
  return moment(compareDate).isBefore(date);
}

export function formatTime(date) {
  if (isDateValid(date)) {
    return moment(date).format('HH:mm');
  }
  return '';
}
