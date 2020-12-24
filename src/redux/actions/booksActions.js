//Local imports
import * as api from '../../api/books';
import { prepareBookList } from '../../helper/books';

// Create Redux action types
export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS'
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE'

// Create Redux action creators that return an action
export const getBooks = () => ({
  type: GET_BOOKS,
});
  
export const getBooksSuccess = (books) => ({
  type: GET_BOOKS_SUCCESS,
  payload: books,
});
  
export const getBooksFailure = () => ({
  type: GET_BOOKS_FAILURE,
});

  // Combine them all in an asynchronous thunk
export function fetchBooks() {
  return async (dispatch) => {
    dispatch(getBooks())

    try {
      const response = await api.getAll(); 
      const data = prepareBookList(response);
      
      dispatch(getBooksSuccess(data));
    } catch (error) {
      dispatch(getBooksFailure());
    }
  }
}