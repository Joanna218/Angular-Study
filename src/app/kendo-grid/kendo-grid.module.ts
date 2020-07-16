import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoGridComponent } from './kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';





@NgModule({
  declarations: [KendoGridComponent],
  imports: [
    CommonModule,
    GridModule,
    FormsModule,
    DropDownsModule,
    DateInputsModule,
    ButtonsModule,
    DialogsModule
  ],
  exports: [KendoGridComponent]
})
export class KendoGridModule { }
