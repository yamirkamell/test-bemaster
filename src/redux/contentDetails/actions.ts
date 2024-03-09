import {
  SET_INITIAL, SET_CONTENT_MOVIE, productsInitialState
} from './types';

export const setInitialState = () => ({
  type: SET_INITIAL,
});

export const setContentMovie = (payload: productsInitialState) => ({
  type: SET_CONTENT_MOVIE,
  payload,
});

