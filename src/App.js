import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';

import TopNavBar from './components/TopNavBar';
import Cards from './components/Cards';

import * as api from './api/books';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.getAll().then((data) => {
      const listOfBooks = data.map((book) => {
        return {
          title: book.title,
          authors: book.authors.join(', '),
          shelf: book.shelf,
          image: book.imageLinks.smallThumbnail,
        };
      });

      setBooks(listOfBooks);
    });
  }, [books]);

  return (
    <>
      <TopNavBar />
      <Container>
        <h1>Lendo atualmente</h1>
        <Cards books={books} shelf="currentlyReading" />
        <h1>Quero ler</h1>
        <Cards books={books} shelf="wantToRead" />
        <h1>Leitura concluída</h1>
        <Cards books={books} shelf="read" />
      </Container>
    </>
  );
}

export default App;
