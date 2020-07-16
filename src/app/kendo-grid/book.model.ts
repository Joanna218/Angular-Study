export class Book {
  BookId: number;
  BookName: string;
  BookCategory: string;
  BookAuthor: string;
  BookBoughtDate: string;
  // BookPublisher: string;

  constructor(bookId: number, bookName: string, bookCategory: string, bookAuthor: string, bookBoughtDate: Date) {
    this.BookId = bookId;
    this.BookName = bookName;
    this.BookCategory = bookCategory;
    this.BookAuthor = bookAuthor;
    this.BookBoughtDate = bookBoughtDate.toISOString().substring(0, 10);
  }
}
