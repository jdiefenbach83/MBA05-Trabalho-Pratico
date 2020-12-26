//Local imports
import * as api from '../../api/books';
import { prepareBookList } from '../../helper/books';

// Create Redux action types
export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

export const SAVE_BOOK = 'SAVE_BOOK';
export const SAVE_BOOK_SUCCESS = 'SAVE_BOOK_SUCCESS';
export const SAVE_BOOK_FAILURE = 'SAVE_BOOK_FAILURE';

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

export const saveBook = () => ({
  type: SAVE_BOOK,
});
  
export const saveBookSuccess = (book) => ({
  type: SAVE_BOOK_SUCCESS,
  payload: book,
});
  
export const saveBookFailure = () => ({
  type: SAVE_BOOK_FAILURE,
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
      console.log(error);
      dispatch(getBooksFailure());
    }
  }
}

export function updateBook(book) {
  return async (dispatch) => {
    dispatch(saveBook())

    try {
      await api.update(book, book.shelf);
                  
      dispatch(saveBookSuccess({book}));
    } catch (error) {
      console.log(error);
      dispatch(saveBookFailure());
    }
  }
}