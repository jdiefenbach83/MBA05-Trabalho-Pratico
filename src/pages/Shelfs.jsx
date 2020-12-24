import { React } from 'react';

import Cards from '../components/Cards';

export default function Shelfs({ updateOneBook, currentBooks }) {
  return (
    <>
      <h1>Lendo atualmente</h1>
      <Cards
        books={currentBooks}
        shelf="currentlyReading"
        updateOneBook={updateOneBook}
      />
      <h1>Quero ler</h1>
      <Cards
        books={currentBooks}
        shelf="wantToRead"
        updateOneBook={updateOneBook}
      />
      <h1>Leitura concluída</h1>
      <Cards books={currentBooks} shelf="read" updateOneBook={updateOneBook} />
    </>
  );
}
