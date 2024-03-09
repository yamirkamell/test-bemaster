import { SET_INITIAL, FormReducerAction, SET_CONTENT_MOVIE } from './types';

const initialState = [
  {
    id: 0,
    name: "",
    img: "",
    description: ""
  }
];

const contentDetailsReducer = (state = initialState, action: FormReducerAction) => {
  switch (action.type) {
    case SET_INITIAL:
      return {
        ...initialState
      };

    case SET_CONTENT_MOVIE:
    return action?.payload;

    default:
      return state;
  }
};

export default contentDetailsReducer;
