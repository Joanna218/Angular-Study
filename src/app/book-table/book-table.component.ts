import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // deleteBook(e: HTMLInputElement): void {
  //   if (confirm("確定要刪除嗎?")) {
  //     let deleteBookData= this.bookData.find(item => item.BookId === parseInt(e.id, 10));
  //     let deleteBookDataIdx = this.bookData.indexOf(deleteBookData);
  //     this.bookData.splice(deleteBookDataIdx, 1);
  //   }
  // }

}
