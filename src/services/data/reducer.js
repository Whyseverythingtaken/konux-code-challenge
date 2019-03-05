/**
 * Data reducer
 */

 import moment from 'moment';

// Constants
import { REQUEST_DATA_SUCCESS } from './constants';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA_SUCCESS:
    const values = action.payload.values || [];
    
      // sort values chronologically
      const sortedValues = values.sort((a, b) => {
        if (moment(a.x).isBefore(b.x)) {
          return -1;
        }

        if (moment(b.x).isBefore(a.x)) {
          return 1;
        }

        return 0;
      });
      return sortedValues;
    default:
      return state;
  }
}