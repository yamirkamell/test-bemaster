import { combineReducers } from 'redux';
import contentCategory from './contentCategory/reducers';


const rootReducer = combineReducers({
  contentCategory
});

export default rootReducer;
