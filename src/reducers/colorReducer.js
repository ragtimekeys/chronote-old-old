import {colors} from 'utils/colors.js';

export const colorReducer = (state={colorScheme: colors["main"]}, action) => {
  console.log("colorReducer state initial",state);
  switch(action.type) {
    case "SET_COLOR_SCHEME": {
      return {...state, colorScheme: colors[action.payload]};
      break;
    }
  }
  return state;
};
