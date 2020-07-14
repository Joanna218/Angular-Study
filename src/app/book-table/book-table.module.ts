import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTableComponent } from './book-table.component';



@NgModule({
  declarations: [BookTableComponent],
  imports: [
    CommonModule
  ],
  exports: [BookTableComponent]
})
export class BookTableModule { }
