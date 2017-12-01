import * as moment from 'moment';

export class CalculationService {
  public static calculateMinWorkTime(date: Date): Date | undefined {
    return this.calculateWorkTime(date, 8, 6);
  }

  public static calculateMaxWorkTime(date: Date): Date | undefined {
    return this.calculateWorkTime(date, 10, 45);
  }

  private static calculateWorkTime(
    date: Date,
    hours: number,
    minutes: number
  ): Date | undefined {
    if (!this.isDateValid(date)) {
      return undefined;
    }

    const time: moment.Moment = moment(date);
    time.add(hours, 'hours').add(minutes, 'minutes');
    return time.toDate();
  }

  private static isDateValid(date: Date): boolean {
    return (
      date &&
      moment(date)
        .utc()
        .isValid()
    );
  }
}
