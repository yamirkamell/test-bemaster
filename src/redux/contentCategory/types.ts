export const SET_INITIAL = "@CATEGORY/SET_INITIAL";
export const SET_CONTENT_CATEGORY = "@CATEGORY/SET_CONTENT_CATEGORY"

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
    payload: productsInitialState | any
}