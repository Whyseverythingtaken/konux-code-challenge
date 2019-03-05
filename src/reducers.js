import { combineReducers } from 'redux';

import dataReducer from './services/data/reducer';
import loadingReducer from './services/loading/reducer';

export default combineReducers({
  data: dataReducer,
  loading: loadingReducer
});