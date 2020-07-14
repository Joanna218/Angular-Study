export class Book {
  BookId: number;
  BookName: string;
  BookCategory: string;
  BookAuthor: string;
  // BookBoughtDate: string;
  // BookPublisher: string;

  constructor(bookId: number, bookName: string, bookCategory: string, bookAuthor: string) {
    this.BookId = bookId;
    this.BookName = bookName;
    this.BookCategory = bookCategory;
    this.BookAuthor = this.BookAuthor;
  }
}
