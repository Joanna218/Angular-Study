import { Component, OnInit } from '@angular/core';
import { bookData } from "../book-data.const";

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css'],
  // template: `<kendo-grid [data]="gridData"></kendo-grid>`

})
export class KendoGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public gridData: any[] = bookGidData;
}

const bookGidData = bookData;
