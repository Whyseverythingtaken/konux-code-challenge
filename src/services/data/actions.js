import { REQUEST_DATA_SUCCESS } from './constants';
import axios from 'axios';

// Actions
import { updateLoading } from '../loading/actions';

// Api
const API = 'http://konuxdata.getsandbox.com/data';

export function requestData(limit) {
  return async (dispatch) => {
    try {
      // Set loading
      dispatch(updateLoading(true));
      // API requiest
      const response = await axios.get(API);
      // Update store
      dispatch(requiestDataSuccess(response.data));
    } catch (error) {
      console.log('error', error);
    } finally {
      // Remove loading
      dispatch(updateLoading(false));
    }
  }
}

function requiestDataSuccess(payload) {
  return {
    type: REQUEST_DATA_SUCCESS,
    payload
  }
}