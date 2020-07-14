import { Component, OnInit } from '@angular/core';
import { bookData } from '../book-data.const';

// model
import { Book } from './book.model';
// service
import { BookFormService } from './book-form.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  constructor(private bookFormService: BookFormService) { }

  // 雙向綁定
  bookName: string;
  bookCategory: string;
  bookAuthor: string;

  ngOnInit(): void {
  }

  addBook(): void {
    const newBookId = this.bookFormService.getMaxBookId() + 1;
    this.bookFormService.setMaxBookId(newBookId);
    const addBook = new Book(newBookId, this.bookName, this.bookCategory, this.bookAuthor);
    this.bookFormService.add(addBook);
  }

  getBookList(): Book[] {
    return this.bookFormService.getBookList();
  }

  deleteBook(idx: number): void {
    this.bookFormService.deleteBook(idx);
  }

  /*
  bookData: Book[] = bookData;
  maxBookId: number;
  bookName: string;
  bookCategory: string;
  bookAuthor: string;


  addBook(): void {
    // 找BookId的最大值
    this.maxBookId = Math.max(...bookData.map(item => item.BookId));
    const addBookData = new Book();
    addBookData.BookId = this.maxBookId + 1;
    addBookData.BookName = this.bookName;
    addBookData.BookCategory = this.bookCategory;
    addBookData.BookAuthor = this.bookAuthor;
    this.bookData.push(addBookData);
  }

  deleteBook(e: HTMLInputElement): void {
    if (confirm('確定要刪除嗎?')) {
      const deleteBookData= this.bookData.find(item => item.BookId === parseInt(e.id, 10));
      const deleteBookDataIdx = this.bookData.indexOf(deleteBookData);
      this.bookData.splice(deleteBookDataIdx, 1);
    }
  }

  */
}
