import { Injectable } from '@angular/core';

import { Book } from "./book.model";
import { bookData } from '../book-data.const';

interface dropDown {
  text: string,
  value: string
}


@Injectable({
  providedIn: 'root'
})
export class KendoGridService {
  // 原始資料
  bookData: Book[] = bookData;

  public bookCategoryItems: Array<dropDown> = [
    { text: "資料庫", value: "database" },
    { text: "網際網路", value: "internet" },
    { text: "家庭保健", value: "home" },
    { text: "應用系統整合", value: "system" },
    { text: "語言", value: "language" }
  ];
  // 預設書籍最大值為找原始資料
  maxBookId: number = Math.max(...bookData.map(item => item.BookId));

  constructor() { }

  initData(): any {
    return this.bookData;
  }

  // 新增書籍
  add(book: Book): void {
    this.bookData.push(book);
  }

  // 拿到bookId最大值
  getMaxBookId(): number {
    return this.maxBookId;
  }

  // 新增一本書，紀錄最大bookId
  setMaxBookId(bookId: number): void {
    this.maxBookId = bookId;
  }

  // 書籍清單
  getBookList(): Book[] {
    return this.bookData;
  }

  // 刪除書籍
  deleteBook(idx: number): void {
    this.bookData.splice(idx, 1);
  }

  // dd
  updateBook(updateBook: any): void {
    // 找到原始資料該筆位置
    const updateBookDataIdx = this.bookData.findIndex(item => item.BookId === updateBook.BookId);
    this.bookData[updateBookDataIdx].BookName = updateBook.BookName;
    this.bookData[updateBookDataIdx].BookAuthor = updateBook.BookAuthor;
    this.bookData[updateBookDataIdx].BookCategory = updateBook.BookCategory;
    this.bookData[updateBookDataIdx].BookBoughtDate = updateBook.BookBoughtDate;
    // 重新指派新資料
    // return this.bookData;
  }
}
