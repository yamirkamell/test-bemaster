import { SET_INITIAL, FormReducerAction } from './types';

const initialState = [
  {
    name: "",
    id: 0,
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

    default:
      return state;
  }
};

export default contentCategoryReducer;
