import { Component, OnInit } from '@angular/core';
import { bookData } from '../book-data.const';
import { Book } from "../book";


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }


  bookData: Book[] = bookData;
  maxBookId: number;
  bookName: string;
  bookCategory: string;
  bookAuthor: string;

  addBook(): void {
    // 找BookId的最大值
    this.maxBookId = Math.max(...bookData.map(item => item.BookId));

    let addBookData = new Book();
    addBookData.BookId = this.maxBookId + 1;
    addBookData.BookName = this.bookName;
    addBookData.BookCategory = this.bookCategory;
    addBookData.BookAuthor = this.bookAuthor;
    this.bookData.push(addBookData);
  }

  deleteBook(e: HTMLInputElement): void {
    if (confirm("確定要刪除嗎?")) {
      let deleteBookData= this.bookData.find(item => item.BookId === parseInt(e.id, 10));
      let deleteBookDataIdx = this.bookData.indexOf(deleteBookData);
      this.bookData.splice(deleteBookDataIdx, 1);
    }
  }

}
