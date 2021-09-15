import { combineReducers } from 'redux';

import { CREDITS_SPENT } from '../actions';


function credits(state=1000, action) {
  switch (action.type) {
    case CREDITS_SPENT: {
      const { amount } = action.payload;
      return state - amount;
    }
    default: {
      return state;
    }
  }
}


export default combineReducers({
  credits,
});