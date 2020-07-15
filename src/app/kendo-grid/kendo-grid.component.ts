import { Component, OnInit } from '@angular/core';
import { bookData } from "../book-data.const";

// model
import { Book } from './book.model';
// service
import { KendoGridService } from './kendo-grid.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';


interface dropDown {
  text: string,
  value: string
}


@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css'],
  // template: `<kendo-grid [data]="gridData"></kendo-grid>`

})
export class KendoGridComponent implements OnInit {
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  private data: Object[];

  constructor(private kendoGridService: KendoGridService) {
    this.loadItems();
   }

  ngOnInit(): void {
  }

  // dropDown
  public bookCategoryItems: Array<dropDown> = [
    { text: "資料庫", value: "DB" },
    { text: "網際網路", value: "IT" },
    { text: "家庭保健", value: "HL" }
  ];

  public selectedItem: dropDown = this.bookCategoryItems[1];

  public gridData: any[] = this.kendoGridService.initData();

  // form
  bookName: string;
  bookCategory: string;
  bookAuthor: string;

  addBook(): void {
    const newBookId = this.kendoGridService.getMaxBookId() + 1;
    this.kendoGridService.setMaxBookId(newBookId);
    const addBook = new Book(newBookId, this.bookName, this.bookCategory, this.bookAuthor);
    this.kendoGridService.add(addBook);
    this.loadItems();
  }

  getBookList(): Book[] {
    return this.kendoGridService.getBookList();
  }

  deleteBook(idx: number): void {
    this.kendoGridService.deleteBook(idx);
  }

  // grid Component
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  // 重新讀取分頁資料
  private loadItems(): void {
      this.gridView = {
          data: this.gridData.slice(this.skip, this.skip + this.pageSize),
          total: this.gridData.length
      };
  }

  public removeHandler(deleteData: any): void {
    // 找到該筆資料的index
    const deleteDataItemIdx = this.gridData.indexOf(deleteData.dataItem);
    // 刪除該筆資料
    this.gridData.splice(deleteDataItemIdx, 1);
    // gridView reload
    this.loadItems();
  }
}

// const bookGidData = bookData;
