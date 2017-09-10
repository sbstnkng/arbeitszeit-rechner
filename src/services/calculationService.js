import moment from 'moment';

export function calculateMinWorkTime(date) {
  if (!isDateValid(date)) {
    return null;
  }

  const time = moment(date);
  time.add(8, 'hours').add(6, 'minutes');
  return time.toDate();
}

export function calculateMaxWorkTime(date) {
  if (!isDateValid(date)) {
    return null;
  }

  const time = moment(date);
  time.add(10, 'hours').add(45, 'minutes');
  return time.toDate();
}

export function isDateValid(date) {
  return date !== null && date !== undefined && moment(date).isValid();
}
