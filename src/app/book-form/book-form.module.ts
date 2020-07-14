import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [BookFormComponent]
})
export class BookFormModule { }
