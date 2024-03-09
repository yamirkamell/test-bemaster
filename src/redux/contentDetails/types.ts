export const SET_INITIAL = "@MOVIE/SET_INITIAL";
export const SET_CONTENT_MOVIE = "@MOVIE/SET_CONTENT_MOVIE"

export interface productsInitialState {
    name: string
    id: number
    img: string
    description: string
}
  
export interface FormReducerAction {
    type: string
    payload: productsInitialState | any
}