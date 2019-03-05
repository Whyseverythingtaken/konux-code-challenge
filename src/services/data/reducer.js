/**
 * Data reducer
 */

// Constants
import { REQUEST_DATA_SUCCESS } from './constants';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA_SUCCESS:
      return action.payload.values;
    default:
      return state;
  }
}