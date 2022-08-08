import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NzResizeDirection } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'edt-basic-panel',
  templateUrl: './basic-panel.component.html',
  host: {
    '[class.edt-basic-panel]': 'true',
    '[style.width.px]': 'width',
    '[class.card-pinning-left]': '!pushpinToggle && resizeDirection === "right"',
    '[class.card-pinning-right]': '!pushpinToggle && resizeDirection === "left"'
  }
})
export class BasicPanelComponent implements OnInit {
  @Input() width = 300;
  @Input() bodyPadding?: string;
  @Input() pushpinToggle = true;
  @Input() resizeable = false;
  @Input() resizeDirection: NzResizeDirection = 'right';
  @Input() pushpinVisible?: boolean;
  @Input() closeVisible?: boolean;
  @Input() title?: string | TemplateRef<void>;
  @Input() content?: TemplateRef<void>;
  @Input() extra?: TemplateRef<void>;
  constructor() {}

  ngOnInit(): void {}
}
