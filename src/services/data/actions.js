import { REQUEST_DATA_SUCCESS } from './constants';
import axios from 'axios';

// Actions
import { updateLoading } from '../loading/actions';

// Api
const API = 'https://konuxdata.getsandbox.com';

export function requestData() {
  const URL = `${API}/data`;
  return async (dispatch) => {
    try {
      // Set loading
      dispatch(updateLoading(true));
      // API requiest
      const response = await axios.get(URL);
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

export function postData(y) {
  const URL = `${API}/points`;
  return async (dispatch) => {
    try {
      // Set loading
      dispatch(updateLoading(true));
      const date = new Date();
      const data = {
        y,
        x: date.toISOString
      }
      // API requiest
      await axios.post(URL, data);
      // Request fresh data points
      dispatch(requestData());
      
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