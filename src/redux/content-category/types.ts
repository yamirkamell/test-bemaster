export const SET_INITIAL = "@USER/SET_INITIAL";

export interface productsInitialState {
    name: string
    id: number
    img: string
    movies: Array<mockMovies>
}
  
export interface mockMovies {
    name: string
    id: number
    img: string
    description: string
}
  
export interface FormReducerAction {
    type: string
    payload: productsInitialState
}