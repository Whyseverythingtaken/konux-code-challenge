import { UPDATE_LOADING } from './constants';

export function updateLoading(payload) {
  return {
    type: UPDATE_LOADING,
    payload
  }
}