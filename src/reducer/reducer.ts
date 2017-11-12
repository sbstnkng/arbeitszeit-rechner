import { UPDATE_ARRIVAL_TIME, UPDATE_LEAVE_TIME, INITIALIZE } from './action';
import { LocalStorageCache, CacheState } from '../cache';

const initalState = {
  time: {
    arrival: undefined,
    leave: undefined
  }
};

interface State {
  time: {
    arrival?: Date;
    leave?: Date;
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
        }
      };
      break;
    case UPDATE_ARRIVAL_TIME:
      newState = {
        ...state,
        time: {
          arrival: action.time,
          leave: state.time.leave
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
        }
      };
      updateStateCache(newState);
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