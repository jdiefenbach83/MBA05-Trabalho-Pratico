import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Cards from '../components/Cards';

import * as api from '../api/books';
import { prepareBookList } from '../helper/books';

export default function SearchList() {
  const { criteria } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.search(criteria).then((data) => {
      const listOfBooks = prepareBookList(data);

      setBooks(listOfBooks);
    });
  }, [criteria]);

  return (
    <>
      <h1>Pesquisa de Livros</h1>
      <Cards books={books} />
    </>
  );
}
