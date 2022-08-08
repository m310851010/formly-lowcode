import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, HostListener, OnInit, Optional, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DragAction, IEditorFormlyField, ItemDragData } from '../../editor.types';
import { FormlyEditorService } from '../../formly-editor.service';

/**
 * 包装容器类组件, 显示占位符等
 */
@Component({
  selector: 'edt-widget-container-wrapper',
  templateUrl: './widget-container-wrapper.component.html',
  host: { '[class.edt-widget-container-wrapper]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetContainerWrapperComponent extends FieldType<IEditorFormlyField> implements OnInit {
  @ViewChild(CdkDropList) dropList!: CdkDropList;
  get isEditMode(): boolean {
    return this.editorService.isEditMode;
  }
  connectedTo: string[] = [];
  dropListClasses!: string;
  constructor(public editorService: FormlyEditorService) {
    super();
  }

  ngOnInit(): void {
    this.dropListClasses = (this.field.fieldGroupClassName || '') + ' cdk-drop-list';
    if (this.field.fieldId !== 'preview' && this.editorService) {
      this.connectedTo = this.editorService.getConnectedTo();
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.editorService.mousePosition.x = event.clientX;
    this.editorService.mousePosition.y = event.clientY;
  }

  canEnter = (drag: CdkDrag) => {
    const isInDropContainer = this._isMouseInElement(drag.dropContainer.element.nativeElement);
    const index = this.connectedTo.indexOf(this.dropList.id);
    const dropContainerIndex = this.connectedTo.indexOf(drag.dropContainer.id);
    return !(isInDropContainer && dropContainerIndex < index);
  };

  onDropListDropped(evt: CdkDragDrop<IEditorFormlyField>): void {
    if (!evt.isPointerOverContainer) {
      console.warn('Pointer is not over container. Not dropping');
      return;
    }

    const itemData: ItemDragData = evt.item.data;
    const field: IEditorFormlyField = itemData.field;
    const currentParent: IEditorFormlyField = evt.previousContainer.data;
    const targetParent: IEditorFormlyField = evt.container.data;

    if (itemData.action === DragAction.COPY) {
      this.editorService.addField(field, evt.currentIndex, targetParent.fieldId);
      return;
    }
    if (itemData.action === DragAction.MOVE) {
      if (currentParent.fieldId === targetParent.fieldId) {
        this.editorService.moveField(evt.previousIndex, evt.currentIndex, targetParent.fieldId);
      } else {
        this.editorService.transferField(field.fieldId!, currentParent.fieldId, targetParent.fieldId);
      }
    }
  }

  getItemDragData(field: IEditorFormlyField): ItemDragData {
    return {
      action: DragAction.MOVE,
      field
    };
  }

  private _isMouseInElement(droplistElement: HTMLElement): boolean {
    const rect: DOMRect = droplistElement.getBoundingClientRect();
    const { x, y } = this.editorService.mousePosition;
    const isInWidth = x >= rect.left && x <= rect.right;
    const isInHeight = y >= rect.top && y <= rect.bottom;
    return isInWidth && isInHeight;
  }
}
