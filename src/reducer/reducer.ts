import { UPDATE_ARRIVAL_TIME, UPDATE_LEAVE_TIME } from './action';

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
  switch (action.type) {
    case UPDATE_ARRIVAL_TIME:
      return {
        ...state,
        time: {
          arrival: action.time,
          leave: state.time.leave
        }
      };
    case UPDATE_LEAVE_TIME:
      return {
        ...state,
        time: {
          arrival: state.time.arrival,
          leave: action.time
        }
      };
    default:
      return state;
  }
}
