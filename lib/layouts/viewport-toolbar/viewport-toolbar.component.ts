import { Component, OnInit } from '@angular/core';
import { FormlyEditorService } from '../../formly-editor.service';
import { ToolbarItem } from '../../widget/toolbar/toolbar.component';

@Component({
  selector: 'edt-viewport-toolbar',
  templateUrl: './viewport-toolbar.component.html',
  host: { '[class.edt-viewport-toolbar]': 'true' }
})
export class ViewportToolbarComponent implements OnInit {
  workspaceToolbarItems: ToolbarItem[] = [
    { icon: 'upload', type: 'link', text: '导入配置' },
    { icon: 'delete', type: 'link', text: '清空' },
    { icon: 'file', type: 'link', text: '生成配置' },
    {
      icon: 'eye',
      type: 'link',
      text: '预览',
      click: (evt, items) => {
        this.editorService.isEditMode = !this.editorService.isEditMode;
      }
    }
  ];

  constructor(protected editorService: FormlyEditorService) {}

  ngOnInit(): void {}
}
