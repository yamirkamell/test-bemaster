import { SET_INITIAL, SET_CONTENT_CATEGORY, FormReducerAction } from './types';

const initialState = [
  {
    name: "",
    id: 0,
    img: "",
    movies: [
        {
          id: 0,
          name: "",
          img: "",
          description: ""
        }
    ]
  }  
];

const contentCategoryReducer = (state = initialState, action: FormReducerAction) => {
  switch (action.type) {
    case SET_INITIAL:
      return {
        ...initialState
      };

    case SET_CONTENT_CATEGORY:
    return action?.payload;

    default:
      return state;
  }
};

export default contentCategoryReducer;
