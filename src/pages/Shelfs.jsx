//External imports
import { React, useEffect } from 'react';
import { connect } from 'react-redux';

//Internal imports
import { fetchBooks } from '../redux/actions/booksActions';
import Spinner from 'react-bootstrap/Spinner';
import Cards from '../components/Cards';

const Shelfs = ({ dispatch, books, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchBooks());

  }, [dispatch]);
  
  // Show loading, error, or success state
  const renderBooks = () => {
    if (loading) {
      return <Spinner animation="border" />
    }
    
    if (hasErrors) {
      return <p>Unable to display books.</p>
    }
    
    return (
      <>
        <h1>Lendo atualmente</h1>
        { <Cards
          books={books}
          shelf="currentlyReading"
          //updateOneBook={updateOneBook}
        />}
        <h1>Quero ler</h1>
        { <Cards
          books={books}
          shelf="wantToRead"
          //updateOneBook={updateOneBook}
        />}
        <h1>Leitura concluída</h1>
        { <Cards 
          books={books} 
          shelf="read" 
          //updateOneBook={updateOneBook} 
        />}
      </>
    ); 
  }

  return renderBooks();
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  books: state.books.books,
  loading: state.books.loading,
  hasErrors: state.books.hasErrors,
});

// Connect Redux to React
export default connect(mapStateToProps)(Shelfs)