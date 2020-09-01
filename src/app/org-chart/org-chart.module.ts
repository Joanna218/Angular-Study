import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgChartComponent } from './org-chart.component';

import {OrganizationChartModule} from 'primeng/organizationchart';



@NgModule({
  declarations: [OrgChartComponent],
  imports: [
    CommonModule,
    OrganizationChartModule
  ],
  exports: [OrgChartComponent]
})
export class OrgChartModule { }
