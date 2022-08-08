import { Component, OnInit } from '@angular/core';
import { BasicCompositePanel } from '../basic-composite-panel';

@Component({
  selector: 'edt-database-panel',
  templateUrl: './database-panel.component.html',
  host: { '[class.edt-database-panel]': 'true' }
})
export class DatabasePanelComponent extends BasicCompositePanel implements OnInit {
  static override readonly PANEL_INFO = {
    title: '数据源',
    icon: 'database',
    sort: 3
  };
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
