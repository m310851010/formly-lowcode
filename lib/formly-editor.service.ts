import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IEditorFormlyField } from './editor.types';
import { NzxUtils } from '@xmagic/nzx-antd/util';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable()
export class FormlyEditorService {
  isEditMode = true;
  private isEditMode$ = new Subject<boolean>();
  private classPrefix$ = new BehaviorSubject<string>('edt');
  mousePosition: { x: number; y: number } = { x: 0, y: 0 };

  DEFAULT_CONNECTED_TO = 'workspace';
  dragStart = false;
  private maxIndex = 0;
  private connectedTo: string[] = [this.DEFAULT_CONNECTED_TO];

  /**
   * 画布中的控件列表
   * @private
   */
  private fields: IEditorFormlyField[] = [];
  private fieldMap = new Map<string, IEditorFormlyField>();
  private activeField?: IEditorFormlyField;
  /**
   * 画布中的控件列表Change
   * @private
   */
  private fieldsChange$ = new Subject<IEditorFormlyField[]>();
  private _fieldSelected$ = new Subject<IEditorFormlyField>();

  get fieldSelected$(): Observable<IEditorFormlyField> {
    return this._fieldSelected$.asObservable();
  }

  constructor() {}

  setClassPrefix(cls: string) {
    this.classPrefix$.next(cls);
  }

  classPrefix(): Observable<string> {
    return this.classPrefix$.asObservable();
  }

  /**
   * 触发画布中的控件列表Change
   * @param fields
   */
  emitFieldsChange(fields: IEditorFormlyField[]): void {
    this.fieldsChange$.next(fields);
  }

  /**
   * 可订阅画布中的控件列表Change事件
   */
  fieldsChange(): Observable<IEditorFormlyField[]> {
    return this.fieldsChange$.asObservable();
  }

  /**
   * 获取可拖拽区域
   */
  getConnectedTo() {
    return this.connectedTo;
  }

  resetField(fields: IEditorFormlyField[]) {
    this.fields = fields;
    this.fieldMap.clear();
    NzxUtils.forEachTree(
      fields,
      item => {
        if (!item.fieldId) {
          item.fieldId = 'key_' + this.maxIndex++;
        }
        this.fieldMap.set(item.fieldId!, item);
      },
      'fieldGroup'
    );

    this.resolveConnectedTo();
  }

  /**
   * 连接器容器id处理
   */
  resolveConnectedTo(): void {
    const levelList: string[][] = [];
    NzxUtils.forEachTree(
      this.fields,
      (field, p, level) => {
        if (!field.canHaveChildren) {
          return;
        }
        field._design = true;
        if (!levelList[level]) {
          levelList[level] = [field.fieldId!];
        } else {
          levelList[level].push(field.fieldId!);
        }
      },
      'fieldGroup'
    );

    const connectedTo: string[] = [];
    levelList.forEach(level => level.forEach(fieldId => connectedTo.push(fieldId)));
    this.connectedTo.splice(0, this.connectedTo.length, ...connectedTo.reverse(), this.DEFAULT_CONNECTED_TO);
  }

  isActiveField(fieldId: string) {
    return this.activeField?.fieldId === fieldId;
  }

  getField(fieldId: string): IEditorFormlyField | undefined {
    return this.fieldMap.get(fieldId);
  }

  selectField(fieldId: string): void {
    const field = this.fieldMap.get(fieldId)!;
    this.activeField = field;
    this._fieldSelected$.next(field);
  }

  addField(current: IEditorFormlyField, targetIndex: number, parentFieldId?: string): void {
    const targetArray = this.getSiblings(parentFieldId);
    const to = this.clamp(targetIndex, targetArray.length);

    const item = NzxUtils.clone(current);
    item.parentFieldId = parentFieldId;

    this.addFieldId(item);
    targetArray.splice(to, 0, item);
    this.resolveConnectedTo();

    this.emitFieldsChange(this.fields);
    this.selectField(item.fieldId!);
  }

  private addFieldId(field: IEditorFormlyField) {
    field._design = true;
    NzxUtils.forEachTree(
      [field],
      (item, parentNode, level) => {
        if (!item.fieldId) {
          item.fieldId = `${item.type || 'default'}_key_${Date.now()}${this.maxIndex++}`;
        }

        if (item.canHaveChildren) {
          item.parentFieldId = parentNode?.fieldId;
        }
        this.fieldMap.set(item.fieldId!, item);
      },
      'fieldGroup'
    );
  }

  /**
   * 在同一容器内移动组件
   * @param fromIndex
   * @param toIndex
   * @param parentFieldId
   */
  moveField(fromIndex: number, toIndex: number, parentFieldId?: string): void {
    const siblings = this.getSiblings(parentFieldId);
    moveItemInArray(siblings, fromIndex, toIndex);
    this.resolveConnectedTo();

    this.emitFieldsChange(this.fields);
  }

  removeField(fieldId: string, parentId?: string): void {
    const siblings = this.getSiblings(parentId);
    const index = siblings.findIndex(field => field.fieldId === fieldId);
    if (index === -1) {
      return;
    }

    siblings.splice(index, 1);
    this.fieldMap.delete(fieldId);
    this.fieldsChange$.next(this.fields);

    const _fieldId = parentId || this.fields[0]?.fieldId;
    if (_fieldId) {
      this.selectField(_fieldId);
    }
  }

  transferField(fieldId: string, currentParentId?: string, targetParentId?: string) {
    const field = this.fieldMap.get(fieldId)!;
    const targetParent = this.fieldMap.get(targetParentId!);
    const currentSiblings = this.getSiblings(currentParentId);
    const targetSiblings = this.getSiblings(targetParentId);
    const currentIndex = currentSiblings.findIndex(f => f.fieldId === field.fieldId);
    const targetIndex = targetSiblings.length;

    transferArrayItem(currentSiblings, targetSiblings, currentIndex, targetIndex);
    field.parentFieldId = targetParent?.fieldId;
    this.resolveConnectedTo();
    this.emitFieldsChange(this.fields);
  }

  private clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
  }

  getSiblings(parentFieldId?: string): IEditorFormlyField[] {
    if (parentFieldId) {
      const parentField = this.fieldMap.get(parentFieldId);
      return parentField ? NzxUtils.get(parentField, parentField.childrenPath || 'fieldGroup', []) : [];
    }
    return this.fields;
  }
}
