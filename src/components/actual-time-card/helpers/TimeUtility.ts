import * as moment from 'moment';

export class TimeUtility {
  private static readonly TIME_FORMAT: string = 'HH:mm';

  public static toTime(date: Date): String {
    if (!this.isValidDate(date)) {
      return '';
    }
    return moment(date)
      .utc()
      .format(this.TIME_FORMAT);
  }

  public static toIndustrialTime(date: Date): String {
    if (!this.isValidDate(date)) {
      return '';
    }

    const time: moment.Moment = moment(date).utc();
    const industrialTime: number = time.hours() + time.minutes() / 60;

    return industrialTime.toFixed(2).toString();
  }

  private static isValidDate(date: Date): boolean {
    return (
      date &&
      moment(date)
        .utc()
        .isValid()
    );
  }
}
