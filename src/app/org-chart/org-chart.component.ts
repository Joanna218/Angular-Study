import { Component, OnInit } from '@angular/core';

import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  constructor() { }

  data: TreeNode[];

  // server 回來的資料
  orgData: any = {
      text: 'TDS',
      value: 'TDS',
      children: [
        { text: 'DC', value: 'DC', expected: 38, actual: 40 },
        { text: 'QAC', value: 'QAC', expected: 30, actual: 40 },
        { text: 'MIS', value: 'MIS', expected: 36, actual: 40 },
      ]
  };

  orgData2: any = {
    text: 'TDS',
    value: 'TDS',
    children: [
      { text: 'DC', value: 'DC' },
      { text: 'QAC', value: 'QAC', children: [{ text: 'MIS', value: 'MIS' }]},
      { text: 'MIS', value: 'MIS' },
    ]
};

  orgDataChildrenData: any = [];
  orgDataChildrenData2: any = [];

  ngOnInit() {
    this.orgData.children.forEach(i => {
      this.orgDataChildrenData.push({
        label: i.text,
        type: 'all',
        expanded: 'true',
        data: {
          expected: i.expected,
          actual: i.actual,
        }
      });
    });

    this.data = [{
      label: this.orgData.text,
      expanded: true,
      children: this.orgDataChildrenData
    }];
  }

}
