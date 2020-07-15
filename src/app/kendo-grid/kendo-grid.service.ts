import { Injectable } from '@angular/core';

import { Book } from "./book.model";
import { bookData } from '../book-data.const';

@Injectable({
  providedIn: 'root'
})
export class KendoGridService {
  // 原始資料
  bookData: Book[] = bookData;
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
}
