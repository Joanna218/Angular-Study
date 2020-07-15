import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoGridComponent } from './kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';



@NgModule({
  declarations: [KendoGridComponent],
  imports: [
    CommonModule,
    GridModule,
    FormsModule,
    DropDownsModule
  ],
  exports: [KendoGridComponent]
})
export class KendoGridModule { }
