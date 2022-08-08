import { FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';

export enum FieldType {
  FORMLY_GROUP = 'formly-group'
}

export enum WrapperType {
  EDITOR = 'editor'
}

export enum DragAction {
  COPY = 'COPY',
  MOVE = 'MOVE'
}

export interface ItemDragData {
  action: DragAction;
  field: IEditorFormlyField;
}

export interface WidgetOption<T = FormlyFieldProps> extends IEditorFormlyField {
  type: string;
  originType?: string;
  icon: string;
  properties?: IBaseProperty[];
}

export interface IEditorFormlyField extends FormlyFieldConfig {
  /**
   * 组件的显示名称
   */
  label?: string;
  fieldGroup?: IEditorFormlyField[];
  fieldId?: string;
  parentFieldId?: string;
  canHaveChildren?: boolean;
  childrenPath?: string; // Lodash path
  _design?: boolean;
}

export interface IBaseProperty {
  type: string;
  name?: string;
  key?: string | number;
  isDeletable?: boolean;
  isKeyEditable?: boolean;
  isSimple?: boolean;
  valueChangeDebounce?: number;
}
