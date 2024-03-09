import { combineReducers } from 'redux';
import contentCategory from './contentCategory/reducers';
import contentDetails from './contentDetails/reducers';


const rootReducer = combineReducers({
  contentCategory,
  contentDetails
});

export default rootReducer;
