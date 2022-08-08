import { Component, OnInit } from '@angular/core';
import { ToolbarItem } from '../../widget/toolbar/toolbar.component';

@Component({
  selector: 'edt-workbench-header',
  templateUrl: './workbench-header.component.html',
  host: {'[class.edt-workbench-header]': 'true'}
})
export class WorkbenchHeaderComponent implements OnInit {
  headerToolbarItems: ToolbarItem[] = [
    { text: '保存', type: 'default', hideShadow: false, size: 'default' },
    { text: '发布', type: 'primary', hideShadow: false, size: 'default' }
  ];
  constructor() {}

  ngOnInit(): void {}
}
