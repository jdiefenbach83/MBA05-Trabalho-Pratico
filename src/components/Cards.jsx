import { Card, Button, CardColumns } from 'react-bootstrap';

export default function Cards(props) {
  const books = !props.shelf
    ? props.books
    : props.books.filter((book) => book.shelf === props.shelf);

  const cards = books.map((book, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index}>
        <Card.Img
          variant="top"
          src={book.image}
          style={{ width: '128px', height: '158px' }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.authors}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <CardColumns>{cards}</CardColumns>
    </>
  );
}
