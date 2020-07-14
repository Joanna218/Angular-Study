import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BookFormModule } from "./book-form/book-form.module";
import { BookTableModule } from "./book-table/book-table.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BookFormModule,
    BookTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

