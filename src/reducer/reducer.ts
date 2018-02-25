import {
  UPDATE_ARRIVAL_TIME,
  UPDATE_LEAVE_TIME,
  INITIALIZE,
  CLEAR_CACHE
} from './action';
import { LocalStorageCache, CacheState } from '../cache';
import { CalculationService } from '../services';

const initalState = {
  time: {
    arrival: undefined,
    leave: undefined
  },
  targetTime: {
    normal: undefined,
    max: undefined
  },
  actualTime: {
    time: undefined,
    overtime: undefined,
    isPositive: undefined
  }
};

interface State {
  time: {
    arrival?: Date;
    leave?: Date;
  };
  targetTime: {
    normal?: Date;
    max?: Date;
  };
  actualTime: {
    time?: Date;
    overtime?: Date;
  };
}
interface Action {
  type: string;
  time: Date;
}

export default function(state: State = initalState, action: Action): State {
  let newState = state;
  switch (action.type) {
    case INITIALIZE:
      const cachedState: State = readCachedState();
      newState = {
        ...state,
        time: {
          arrival: cachedState.time.arrival,
          leave: cachedState.time.leave
        },
        targetTime: {
          normal: CalculationService.calculateMinWorkTime(
            cachedState.time.arrival
          ),
          max: CalculationService.calculateMaxWorkTime(cachedState.time.arrival)
        },
        actualTime: {
          time: CalculationService.calculateActualWorkTime(
            cachedState.time.arrival,
            cachedState.time.leave
          ),
          overtime: CalculationService.calculateOvertime(
            cachedState.time.arrival,
            cachedState.time.leave
          )
        }
      };
      break;
    case UPDATE_ARRIVAL_TIME:
      newState = {
        ...state,
        time: {
          arrival: action.time,
          leave: state.time.leave
        },
        targetTime: {
          normal: CalculationService.calculateMinWorkTime(action.time),
          max: CalculationService.calculateMaxWorkTime(action.time)
        },
        actualTime: {
          time: CalculationService.calculateActualWorkTime(
            action.time,
            state.time.leave
          ),
          overtime: CalculationService.calculateOvertime(
            action.time,
            state.time.leave
          )
        }
      };
      updateStateCache(newState);
      break;
    case UPDATE_LEAVE_TIME:
      newState = {
        ...state,
        time: {
          arrival: state.time.arrival,
          leave: action.time
        },
        actualTime: {
          time: CalculationService.calculateActualWorkTime(
            state.time.arrival,
            action.time
          ),
          overtime: CalculationService.calculateOvertime(
            state.time.arrival,
            action.time
          )
        }
      };
      updateStateCache(newState);
      break;
    case CLEAR_CACHE:
      newState = initalState;
      clearStateCache();
      break;
    default:
      break;
  }

  return newState;
}

function readCachedState(): State {
  const cachedState: CacheState = LocalStorageCache.read();

  return {
    ...initalState,
    time: {
      arrival: cachedState.arrival,
      leave: cachedState.leave
    }
  };
}

function updateStateCache(state: State): void {
  const cacheState: CacheState = {
    arrival: state.time.arrival,
    leave: state.time.leave
  };
  LocalStorageCache.update(cacheState);
}

function clearStateCache(): void {
  LocalStorageCache.remove();
}
