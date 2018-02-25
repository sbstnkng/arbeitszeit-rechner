import * as moment from 'moment';

export class CalculationService {
  public static calculateMinWorkTime(date: Date | undefined): Date | undefined {
    return this.calculateWorkTime(date, 8, 6);
  }

  public static calculateMaxWorkTime(date: Date | undefined): Date | undefined {
    return this.calculateWorkTime(date, 10, 45);
  }

  public static calculateActualWorkTime(
    startTime: Date | undefined,
    endTime: Date | undefined
  ): Date | undefined {
    if (!this.isDateValid(startTime) || !this.isDateValid(endTime)) {
      return undefined;
    }

    const start: moment.Moment = moment(startTime).utc();
    const end: moment.Moment = moment(endTime).utc();
    let workTime: moment.Moment = end.subtract({
      hours: start.hours(),
      minutes: start.minutes(),
      seconds: start.seconds(),
      milliseconds: start.milliseconds()
    });

    const durationHours: Number = moment
      .duration({
        milliseconds: workTime.milliseconds(),
        seconds: workTime.seconds(),
        minutes: workTime.minutes(),
        hours: workTime.hours()
      })
      .asHours();

    if (durationHours > 6) {
      if (durationHours >= 6.5) {
        workTime.subtract(30, 'minutes');
      } else {
        workTime.minutes(0);
        workTime.seconds(0);
        workTime.milliseconds(0);
      }
    }
    if (durationHours > 9) {
      if (durationHours >= 9.25) {
        workTime.subtract(15, 'minutes');
      } else {
        workTime.minutes(0);
        workTime.seconds(0);
        workTime.milliseconds(0);
      }
    }

    return workTime.toDate();
  }

  public static calculateOvertime(
    startTime: Date | undefined,
    endTime: Date | undefined
  ): Date | undefined {
    const workTime: Date | undefined = this.calculateActualWorkTime(
      startTime,
      endTime
    );
    if (workTime === undefined) {
      return undefined;
    }

    let time: moment.Moment = moment(workTime).utc();
    const standardTime: moment.Moment = time
      .clone()
      .set({ hours: 7, minutes: 36 });

    if (time.isBefore(standardTime)) {
      time = standardTime.subtract({
        days: 1,
        hours: time.hours(),
        minutes: time.minutes(),
        seconds: time.seconds(),
        milliseconds: time.milliseconds()
      });
    } else {
      time.subtract({ hours: 7, minutes: 36 });
    }

    return time.toDate();
  }

  public static isWorkTimePositive(
    startTime: Date | undefined,
    endTime: Date | undefined
  ): boolean | undefined {
    const workTime: Date | undefined = this.calculateActualWorkTime(
      startTime,
      endTime
    );
    if (workTime === undefined) {
      return undefined;
    }

    let time: moment.Moment = moment(workTime).utc();
    const standardTime: moment.Moment = time
      .clone()
      .set({ hours: 7, minutes: 36 });

    return time.isSameOrAfter(standardTime);
  }

  private static calculateWorkTime(
    date: Date | undefined,
    hours: number,
    minutes: number
  ): Date | undefined {
    if (!this.isDateValid(date)) {
      return undefined;
    }

    const time: moment.Moment = moment(date).utc();
    time.add(hours, 'hours').add(minutes, 'minutes');
    return time.toDate();
  }

  private static isDateValid(date: Date | undefined): boolean {
    return (
      date !== undefined &&
      moment(date)
        .utc()
        .isValid()
    );
  }
}
