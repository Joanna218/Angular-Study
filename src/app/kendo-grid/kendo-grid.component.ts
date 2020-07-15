import { Component, OnInit } from '@angular/core';
import { bookData } from "../book-data.const";

// model
import { Book } from './book.model';
// service
import { KendoGridService } from './kendo-grid.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';



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

  public gridData: any[] = bookGidData;

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

const bookGidData = bookData;
