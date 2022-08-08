import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbenchHeaderComponent } from './workbench-header/workbench-header.component';
import { ViewportToolbarComponent } from './viewport-toolbar/viewport-toolbar.component';
import { WorkspaceViewportComponent } from './workspace-viewport/workspace-viewport.component';
import { WidgetModule } from '../widget/widget.module';
import { CompositePanelModule } from './composite-panel/composite-panel.module';
import { WorkbenchPropertyComponent } from './workbench-property/workbench-property.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormlyModule } from '@xmagic/nz-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzxDirectiveModule } from '@xmagic/nzx-antd/directive';

const COMPONENT = [
  WorkbenchHeaderComponent,
  ViewportToolbarComponent,
  WorkspaceViewportComponent,
  WorkbenchPropertyComponent
];
@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
    CompositePanelModule,
    DragDropModule,
    FormlyModule,
    NzFormlyModule,
    NzxDirectiveModule
  ],
  exports: [COMPONENT, WidgetModule, CompositePanelModule]
})
export class EditorLayoutModule {}
