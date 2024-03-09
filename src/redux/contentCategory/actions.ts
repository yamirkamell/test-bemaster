import {
  SET_INITIAL, SET_CONTENT_CATEGORY, productsInitialState,
} from './types';

export const setInitialState = () => ({
  type: SET_INITIAL,
});

export const setContentCategory = (payload: productsInitialState) => ({
  type: SET_CONTENT_CATEGORY,
  payload,
});

