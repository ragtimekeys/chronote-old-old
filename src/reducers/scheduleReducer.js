import {ADD_SCHEDULE} from 'actions/scheduleAction.js'

export const scheduleReducer = (state={[]}, action) => {
  console.log("colorReducer state initial",state);
  switch(action.type) {
    case ADD_SCHEDULE: {
      return {...state, schedule: colors[action.payload]};
      break;
    }
  }
  return state;
};
