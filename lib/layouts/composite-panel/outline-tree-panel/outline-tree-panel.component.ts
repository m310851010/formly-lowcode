import { Component, OnInit } from '@angular/core';
import { BasicCompositePanel } from '../basic-composite-panel';

@Component({
  selector: 'edt-outline-tree-panel',
  templateUrl: './outline-tree-panel.component.html',
  host: { '[class.edt-outline-tree-panel]': 'true' }
})
export class OutlineTreePanelComponent extends BasicCompositePanel implements OnInit {
  static override readonly PANEL_INFO = {
    title: '大纲树',
    iconHtml:
      '<svg fill="currentColor" preserveAspectRatio="xMidYMid meet" width="20" height="20" viewBox="0 0 1024 1024" data-spm-anchor-id="0.0.0.i4.68b04b2coAvMlH"><path d="M128 96h512a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V160a64 64 0 0 1 64-64z m32 64a32 32 0 1 0 0 64h448a32 32 0 0 0 0-64H160z m224 576h512a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z m32 64a32 32 0 0 0 0 64h448a32 32 0 0 0 0-64H416z m-32-384h512a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z m32 64a32 32 0 0 0 0 64h448a32 32 0 0 0 0-64H416z" data-spm-anchor-id="0.0.0.i1.68b04b2coAvMlH"></path></svg>',
    sort: 2
  };
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
