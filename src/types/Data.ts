export interface AppData extends WorkTime, TargetTime, ActualTime {}

export interface WorkTime {
  time: {
    arrival?: Date;
    leave?: Date;
  };
}

export interface TargetTime {
  targetTime: {
    normal?: Date;
    max?: Date;
  };
}

export interface ActualTime {
  actualTime: {
    time?: Date;
    overtime?: Date;
    isPositive?: boolean;
  };
}

export interface CacheData {
  arrival?: Date;
  leave?: Date;
}
