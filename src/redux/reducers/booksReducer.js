// Import all actions
import * as actions from '../actions/booksActions';

export const initialState = {
  books: [],
  loading: false,
  updating: false,
  hasErrors: false,
};
  
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {...state, loading: true, updating: false};

    case actions.GET_BOOKS_SUCCESS:
      return {books: action.payload, loading: false, updating: false, hasErrors: false};

    case actions.GET_BOOKS_FAILURE:
      return {...state, loading: false, updating: false, hasErrors: true};

    case actions.SAVE_BOOK:      
      return {...state, loading: false, updating: true};

    case actions.SAVE_BOOK_SUCCESS:      
      const filteredBooks = state.books.filter(item => item.id !== action.payload.book.id);      
      const newBooks = [action.payload.book, ...filteredBooks]; 

      return {books: newBooks, loading: false, updating: false, hasErrors: false};

    case actions.SAVE_BOOK_FAILURE:
      return {...state, loading: false, updating: false, hasErrors: true};

    default:
      return state;
  }
}