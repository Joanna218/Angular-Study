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
  // grid雙向綁定資料
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  // bookDialog預設為關著
  public bookDialogMode = false;
  // 判別現在的操作模式(新增:true or 修改:false)
  public isAddBookMode = true;
  // 書籍類別dropDownList
  public bookCategoryItems: Array<dropDown> = [
    { text: "資料庫", value: "database" },
    { text: "網際網路", value: "internet" },
    { text: "家庭保健", value: "home" },
    { text: "應用系統整合", value: "system" },
    { text: "語言", value: "language" }
  ];
  // 類別下拉選單被選到的整包資料，預設為第一筆資料
  public selectedBookCategoryItem: dropDown = this.bookCategoryItems[0];
  // 類別下選單改變
  public changeBookCategory(data: any): void {
    this.bookCategory = data.text;
  }
  // grid初始資料
  public gridData: any[] = this.kendoGridService.initData();

  // 書籍資料雙向綁定
  bookName: string;
  bookCategory: string;
  bookAuthor: string;
  // datePicker
  bookBoughtDate: Date = new Date();
  // tslint:disable-next-line: no-trailing-whitespace

  constructor(private kendoGridService: KendoGridService) {
    this.loadBookData();
   }

  ngOnInit(): void {
  }


  // 視窗中新增書籍按鈕
  public addBook(): void {
    const newBookId = this.kendoGridService.getMaxBookId() + 1;
    this.kendoGridService.setMaxBookId(newBookId);
    const addBook = new Book(newBookId, this.bookName, this.bookCategory, this.bookAuthor, this.bookBoughtDate);
    this.kendoGridService.add(addBook);
    // 欄位驗證
    // 新增成功提示
    // 清空欄位
    this.resetAddBookFrom();
    this.loadBookData();
  }
  // 拿到全部的書籍資料
  public getBookList(): Book[] {
    return this.kendoGridService.getBookList();
  }

  // grid切換分頁
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadBookData();
  }

  // 讀取分頁資料至gridView
  private loadBookData(): void {
      this.gridView = {
          data: this.gridData.slice(this.skip, this.skip + this.pageSize),
          total: this.gridData.length
      };
  }
  // 刪除書籍Handler
  public removeHandler(deleteData: any): void {
    // 找到該筆資料的index
    const deleteDataItemIdx = this.gridData.indexOf(deleteData.dataItem);
    // 刪除該筆資料
    this.gridData.splice(deleteDataItemIdx, 1);
    // gridView reload
    this.loadBookData();
  }
  // 編輯書籍Handler
  public editHandler(editData: any): void {
    const editBookData = editData.dataItem;
    this.bookName = editBookData.BookName;
    this.bookAuthor = editBookData.BookAuthor;
    const bookCategoryData = this.bookCategoryItems.filter(item => item.text === editBookData.BookCategory);
    this.selectedBookCategoryItem = bookCategoryData[0];
    this.bookBoughtDate = new Date(editBookData.BookBoughtDate);
    this.isAddBookMode = false;
    this.openBookDialog();
  }


  // 清空視窗中所有欄位
  private resetAddBookFrom(): void {
    this.bookName = '';
    this.bookAuthor = '';
    this.bookCategory = '';
    this.selectedBookCategoryItem = this.bookCategoryItems[0];
    this.bookBoughtDate = new Date();
  }
  // 新增書籍視窗
  public openAddBookDialog(): void {
    this.resetAddBookFrom();
    this.isAddBookMode = true;
    this.openBookDialog();
  }

  public closeBookDialog(): void {
    this.bookDialogMode = false;
  }
  private openBookDialog(): void {
    this.bookDialogMode = true;
  }
}
