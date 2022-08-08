import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NzSpaceSize } from 'ng-zorro-antd/space';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzButtonShape, NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';

@Component({
  selector: 'edt-toolbar',
  templateUrl: './toolbar.component.html',
  host: { '[class.edt-basic-toolbar]': 'true' }
})
export class ToolbarComponent implements OnInit {
  @Input() spaceSize: NzSpaceSize = 'middle';
  @Input() padding = '12px';
  @Input() itemSize: NzButtonSize = 'small';
  @Input() hideShadow = true;
  @Input() direction: 'vertical' | 'horizontal' = 'horizontal';
  @Input() startItems: ToolbarItem[] = [];
  @Input() centerItems: ToolbarItem[] = [];
  @Input() endItems: ToolbarItem[] = [];
  @Input() iconSize?: string;
  @Input() iconColor?: string;

  get directionCls() {
    return {
      'edt-toolbar__vertical': this.direction === 'vertical',
      'edt-toolbar__horizontal': this.direction === 'horizontal'
    };
  }

  get toolbarPadding() {
    return {
      padding: this.direction === 'vertical' ? `${this.padding || '12px'} 0` : `0 ${this.padding || '12px'}`
    };
  }

  constructor() {}

  ngOnInit(): void {}

  isTemplate(text: string | TemplateRef<{}>) {
    return text instanceof TemplateRef;
  }
}

export interface ToolbarItem {
  /**
   * 自定义文本
   */
  text?: string | TemplateRef<{}>;
  /**
   * 图标
   */
  icon?: string;
  iconHtml?: string;
  /**
   * 点击事件
   */
  click?: (evt: ToolbarItem, items: ToolbarItem[]) => void;
  /**
   * 提示信息
   */
  tooltip?: string;
  /**
   * 是否是分隔符
   */
  separator?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 设置按钮载入状态
   */
  loading?: boolean;
  /**
   * 按钮大小
   */
  size?: NzButtonSize;
  /**
   * 按钮类型
   */
  type?: NzButtonType;
  shape?: NzButtonShape;
  iconSize?: string;
  iconColor?: string;
  hideShadow?: boolean;
  ngClass?:
    | string
    | string[]
    | Set<string>
    | {
        [klass: string]: any;
      };
  ngStyle?: {
    [klass: string]: any;
  };
  dropdownMenu?: string | NzDropdownMenuComponent;
  [key: string]: any;
}
