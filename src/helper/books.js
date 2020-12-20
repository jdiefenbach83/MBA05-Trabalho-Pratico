export const prepareBookList = (books) => {
  if (!Array.isArray(books)) {
    return [];
  }

  return books.map((book) => {
    return {
      title: book.title,
      authors: !!book.authors ? book.authors.join(', ') : '',
      shelf: book.shelf,
      image: book.imageLinks.smallThumbnail,
    };
  });
};
