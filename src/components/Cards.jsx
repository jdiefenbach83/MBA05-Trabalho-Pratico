import { Card, CardColumns } from 'react-bootstrap';
import ActionButtons from './ActionButtons';

export default function Cards({ books, shelf }) {
  const localBooks = !shelf
    ? books
    : books.filter((book) => book.shelf === shelf);

  const cards = localBooks.map((book) => {
    //const currentBook = currentBooks?.find((item) => item.id === book.id);

    return (
      <Card style={{ width: '18rem' }} key={book.id}>
        <Card.Img
          variant="top"
          src={book.image}
          style={{ width: '128px', height: '158px' }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.authors}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <ActionButtons
            book={book}
          />
        </Card.Footer>
      </Card>
    );
  });

  return (
    <>
      <CardColumns>{cards}</CardColumns>
    </>
  );
}
