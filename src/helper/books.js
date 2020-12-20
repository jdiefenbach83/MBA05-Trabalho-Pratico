export const prepareBookList = (books) => {
  if (!Array.isArray(books)) {
    return [];
  }

  return books.map((book) => {
    return {
      id: book.id,
      title: book.title,
      authors: !!book.authors ? book.authors.join(', ') : '',
      shelf: book.shelf,
      image: book.imageLinks.smallThumbnail,
    };
  });
};
