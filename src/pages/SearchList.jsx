import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import Cards from '../components/Cards';

import * as api from '../api/books';
import { prepareBookList } from '../helper/books';

export default function SearchList({ currentBooks, updateOneBook }) {
  const { criteria } = useParams();
  const [books, setBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const renderElements = () => {
    if (isSearching) {
      return <Spinner animation="border" />;
    }

    if (books.length === 0) {
      return <div>Nenhum livro encontrado</div>;
    }

    return (
      <Cards
        books={books}
        currentBooks={currentBooks}
        updateOneBook={updateOneBook}
      />
    );
  };

  useEffect(() => {
    setIsSearching(true);
    api.search(criteria).then((data) => {
      const listOfBooks = prepareBookList(data);

      setBooks(listOfBooks);
      setIsSearching(false);
    });
  }, [criteria, setIsSearching]);

  return (
    <>
      <h1>Pesquisa de Livros</h1>
      {renderElements()}
    </>
  );
}
