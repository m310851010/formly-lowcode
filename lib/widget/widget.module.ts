import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicPanelComponent } from './basic-panel/basic-panel.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EdtTrustHtmlPipe } from './trust-resource.pipe';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { WidgetContainerWrapperComponent } from './widget-container-wrapper/widget-container-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormlyModule } from '@xmagic/nz-formly';
import { FieldType, IEditorFormlyField, WrapperType } from '../editor.types';
import { FormsModule } from '@angular/forms';
import { FormlyEchartsModule } from '@xmagic/nz-formly/echarts';

export function addonsExtension(field: IEditorFormlyField) {
  if (!field._design) {
    return;
  }

  if (field.wrappers) {
    if (
      field.wrappers.filter(v => typeof v === 'string').every(v => (v as string).indexOf(WrapperType.EDITOR) === -1)
    ) {
      field.wrappers.unshift(WrapperType.EDITOR);
    }
  } else {
    field.wrappers = [WrapperType.EDITOR];
  }
}
const WIDGET_COMPONENT = [
  BasicPanelComponent,
  ToolbarComponent,
  EdtTrustHtmlPipe,
  WidgetWrapperComponent,
  WidgetContainerWrapperComponent
];
@NgModule({
  declarations: [WIDGET_COMPONENT],
  exports: [WIDGET_COMPONENT],
  imports: [
    CommonModule,
    NzCardModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
    NzDropDownModule,
    NzDividerModule,
    NzOutletModule,
    NzToolTipModule,
    NzResizableModule,
    DragDropModule,
    FormlyModule.forChild({
      types: [{ name: FieldType.FORMLY_GROUP, component: WidgetContainerWrapperComponent }],
      wrappers: [{ name: WrapperType.EDITOR, component: WidgetWrapperComponent }],
      extensions: [{ name: 'formly-field-toolbar', extension: { onPopulate: addonsExtension } }]
    }),
    FormlyEchartsModule,
    NzFormlyModule
  ],
  providers: []
})
export class WidgetModule {}
