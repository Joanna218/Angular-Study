import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoGridComponent } from './kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  declarations: [KendoGridComponent],
  imports: [
    CommonModule,
    GridModule
  ],
  exports: [KendoGridComponent]
})
export class KendoGridModule { }
