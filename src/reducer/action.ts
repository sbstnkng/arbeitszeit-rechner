export const INITIALIZE: string = 'INITIALIZE';
export const UPDATE_ARRIVAL_TIME: string = 'UPDATE_ARRIVAL_TIME';
export const UPDATE_LEAVE_TIME: string = 'UPDATE_LEAVE_TIME';

export const initializeActionCreator = () => {
  return {
    type: INITIALIZE
  };
};

export const updateArrivalTimeActionCreator = (time: Date) => {
  return {
    type: UPDATE_ARRIVAL_TIME,
    time: time
  };
};

export const updateLeaveTimeActionCreator = (time: Date) => {
  return {
    type: UPDATE_LEAVE_TIME,
    time: time
  };
};
