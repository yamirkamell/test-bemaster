import { combineReducers } from 'redux';
import contentCategoryReducer from './content-category/reducers';


const rootReducer = combineReducers({
  contentCategoryReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
