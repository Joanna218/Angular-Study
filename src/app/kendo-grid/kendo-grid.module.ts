import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoGridComponent } from './kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [KendoGridComponent],
  imports: [
    CommonModule,
    GridModule,
    FormsModule
  ],
  exports: [KendoGridComponent]
})
export class KendoGridModule { }
