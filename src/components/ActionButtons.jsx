import { React, useState, useEffect } from 'react';
import { BsFillBookmarkFill, BsFillTrashFill } from 'react-icons/bs';

export default function ActionButtons({ book, currentBook }) {
  const [currentShelf, setCurrentShelf] = useState('');

  const [isCurrentlyReading, setCurrentlyReading] = useState(false);
  const [isWantToRead, setWantToRead] = useState(false);
  const [isRead, setRead] = useState(false);
  const [canRemove, setCanRemove] = useState(false);

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
      setCanRemove(false);

      return;
    }

    if (currentShelf === 'currentlyReading') {
      setCurrentlyReading(true);
      setWantToRead(false);
      setRead(false);
      setCanRemove(true);

      return;
    }

    if (currentShelf === 'wantToRead') {
      setCurrentlyReading(false);
      setWantToRead(true);
      setRead(false);
      setCanRemove(true);

      return;
    }

    if (currentShelf === 'read') {
      setCurrentlyReading(false);
      setWantToRead(false);
      setRead(true);
      setCanRemove(true);

      return;
    }
  }, [currentShelf]);

  const handleAddToCurrentlyReading = (e) => {
    setCurrentShelf('currentlyReading');
  };

  const handleAddToWantToRead = (e) => {
    setCurrentShelf('wantToRead');
  };

  const handleAddToRead = (e) => {
    setCurrentShelf('read');
  };

  const handleRemoveFromBooks = (e) => {
    setCurrentShelf('');
  };

  return (
    <>
      <button
        type="button"
        style={
          isCurrentlyReading
            ? { ...styles.actionButton, ...styles.bookCurrentlyReading }
            : { ...styles.actionButton, ...styles.greyButton }
        }
        onClick={handleAddToCurrentlyReading}
        disabled={isCurrentlyReading}
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
      >
        <BsFillBookmarkFill />
      </button>
      <button
        type="button"
        style={
          canRemove
            ? { ...styles.actionButton, ...styles.bookToRemove }
            : { ...styles.actionButton, ...styles.greyButton }
        }
        onClick={handleRemoveFromBooks}
        disabled={!canRemove}
      >
        <BsFillTrashFill />
      </button>
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
  bookToRemove: {
    color: 'red',
  },
};
