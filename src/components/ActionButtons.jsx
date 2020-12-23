import { React, useState, useEffect } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';
import Spinner from 'react-bootstrap/Spinner';

import * as api from '../api/books';

export default function ActionButtons({ book, currentBook, updateOneBook }) {
  const [currentShelf, setCurrentShelf] = useState('');

  const [isCurrentlyReading, setCurrentlyReading] = useState(false);
  const [isWantToRead, setWantToRead] = useState(false);
  const [isRead, setRead] = useState(false);

  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (!!currentBook) {
      setCurrentShelf(currentBook.shelf);

      return;
    }

    setCurrentShelf(book.shelf ?? '');
  }, [currentBook, book.shelf]);

  useEffect(() => {
    if (currentShelf === '') {
      setCurrentlyReading(false);
      setWantToRead(false);
      setRead(false);

      return;
    }

    if (currentShelf === 'currentlyReading') {
      setCurrentlyReading(true);
      setWantToRead(false);
      setRead(false);

      return;
    }

    if (currentShelf === 'wantToRead') {
      setCurrentlyReading(false);
      setWantToRead(true);
      setRead(false);

      return;
    }

    if (currentShelf === 'read') {
      setCurrentlyReading(false);
      setWantToRead(false);
      setRead(true);

      return;
    }
  }, [currentShelf]);

  const updateShelf = (shelf) => {
    setIsUpdating(true);

    api.update(book, shelf).then((data) => {
      const updatedBook = Object.assign({}, book);
      updatedBook.shelf = shelf;

      updateOneBook(updatedBook);
      setIsUpdating(false);
    });
  };

  const handleAddToCurrentlyReading = (e) => {
    setCurrentShelf('currentlyReading');
    updateShelf('currentlyReading');
  };

  const handleAddToWantToRead = (e) => {
    setCurrentShelf('wantToRead');
    updateShelf('wantToRead');
  };

  const handleAddToRead = (e) => {
    setCurrentShelf('read');
    updateShelf('read');
  };

  return (
    <>
      <div>
        <button
          type="button"
          style={
            isCurrentlyReading
              ? { ...styles.actionButton, ...styles.bookCurrentlyReading }
              : { ...styles.actionButton, ...styles.greyButton }
          }
          onClick={handleAddToCurrentlyReading}
          disabled={isCurrentlyReading}
          title="Lendo atualmente"
        >
          <BsFillBookmarkFill />
        </button>
        <button
          type="button"
          style={
            isWantToRead
              ? { ...styles.actionButton, ...styles.bookWantToRead }
              : { ...styles.actionButton, ...styles.greyButton }
          }
          onClick={handleAddToWantToRead}
          disabled={isWantToRead}
          title="Quero ler"
        >
          <BsFillBookmarkFill />
        </button>
        <button
          type="button"
          style={
            isRead
              ? { ...styles.actionButton, ...styles.bookRead }
              : { ...styles.actionButton, ...styles.greyButton }
          }
          onClick={handleAddToRead}
          disabled={isRead}
          title="Leitura concluída"
        >
          <BsFillBookmarkFill />
        </button>
      </div>
      {isUpdating && <Spinner animation="border" />}
    </>
  );
}

const styles = {
  actionButton: {
    border: '1px solid #e0e3e9',
    padding: '5px 10px',
    margin: '5px 6px 10px',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
  },
  greyButton: {
    color: 'grey',
  },
  bookCurrentlyReading: {
    color: 'yellow',
  },
  bookWantToRead: {
    color: 'blue',
  },
  bookRead: {
    color: 'green',
  },
};
