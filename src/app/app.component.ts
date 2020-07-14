import { Component } from '@angular/core';
import { stationList } from './station-list.const';
import { Message } from './message';

import { bookData } from './book-data.const';
import { Book } from "./book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  /*
  // 宣告 元件的data資料
  list = stationList;
  name = '';
  content = '';
｀
  data: string[];

 // xxx: Message[] = [];

  addMessage(): void {

    // 防呆，避免名稱或內容是空值時也可以留言
    if (!this.name.trim() || !this.content.trim()) {
      return;
    }

    // 用名稱跟內容產生一個留言的資料物件
    //const message = new Message(this.name, this.content);

    // 將留言的資料物件放進容器裡
    //this.xxx.push({message});
    this.data.push(this.name);
    // 清空內容
    this.content = '';
  }
  */
}
