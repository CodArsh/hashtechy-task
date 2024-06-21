import { combineReducers } from 'redux';
import rootReducer from './rootReducers';

// Combine reducers
const combinedReducers = combineReducers({
  rootReducer,
  // Add other reducers here if needed
});

export default combinedReducers;
