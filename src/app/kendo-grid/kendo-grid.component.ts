import { Component, OnInit } from '@angular/core';
import { bookData } from "../book-data.const";

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

  constructor() {
    this.loadItems();
   }

  ngOnInit(): void {
  }

  public gridData: any[] = bookGidData;

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
      this.gridView = {
          data: this.gridData.slice(this.skip, this.skip + this.pageSize),
          total: this.gridData.length
      };
  }
}

const bookGidData = bookData;
