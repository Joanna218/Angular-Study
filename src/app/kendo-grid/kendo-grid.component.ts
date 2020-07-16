import { Component, OnInit } from '@angular/core';

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
    { text: "資料庫", value: "database" },
    { text: "網際網路", value: "internet" },
    { text: "家庭保健", value: "home" },
    { text: "應用系統整合", value: "system" },
    { text: "語言", value: "language" }
  ];

  public selectedItem: dropDown = this.bookCategoryItems[0];

  public selectionChange(data: any): void {
    this.bookCategory = data.text;
  }

  public gridData: any[] = this.kendoGridService.initData();


  // form
  bookName: string;
  bookCategory: string;
  bookAuthor: string;
  // datePicker
  bookBoughtDate: Date = new Date();

  addBook(): void {
    const newBookId = this.kendoGridService.getMaxBookId() + 1;
    this.kendoGridService.setMaxBookId(newBookId);
    const addBook = new Book(newBookId, this.bookName, this.bookCategory, this.bookAuthor, this.bookBoughtDate);
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

  // addBookWindow
  public opened = false;
  public dataSaved = false;

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  // public submit(): void {
  //     this.dataSaved = true;
  //     this.close();
  // }

}

// const bookGidData = bookData;
