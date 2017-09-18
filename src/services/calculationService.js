import moment from 'moment';

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

export function isDateValid(date) {
  return date !== null && date !== undefined && moment(date).isValid();
}
