import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BookFormModule } from "./book-form/book-form.module";
import { BookTableModule } from "./book-table/book-table.module";
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoGridModule } from "./kendo-grid/kendo-grid.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BookFormModule,
    BookTableModule,
    // GridModule,
    BrowserAnimationsModule,
    KendoGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

