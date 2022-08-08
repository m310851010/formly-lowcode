import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlineTreePanelComponent } from './outline-tree-panel/outline-tree-panel.component';
import { CompositePanelComponent } from './composite-panel.component';
import { DatabasePanelComponent } from './database-panel/database-panel.component';
import { ComponentLibPanelComponent } from './component-lib-panel/component-lib-panel.component';
import { WidgetModule } from '../../widget/widget.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzxDirectiveModule } from '@xmagic/nzx-antd/directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

export const CompositePanelComponents: Type<any>[] = [
  OutlineTreePanelComponent,
  CompositePanelComponent,
  DatabasePanelComponent,
  ComponentLibPanelComponent
];
@NgModule({
  declarations: [CompositePanelComponents],
  imports: [
    CommonModule,
    WidgetModule,
    NzTabsModule,
    NzIconModule,
    NzResizableModule,
    NzCollapseModule,
    NzxDirectiveModule,
    DragDropModule,
    NzButtonModule,
    NzToolTipModule
  ],

  exports: [CompositePanelComponents]
})
export class CompositePanelModule {}
