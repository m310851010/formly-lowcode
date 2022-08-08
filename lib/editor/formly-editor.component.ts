import { Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragExit,
  CdkDragMove,
  CdkDragStart,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem,
  CdkDragEnter
} from '@angular/cdk/drag-drop';
import {} from '@angular/cdk/drag-drop';
import { NamedTemplate } from '@xmagic/nzx-antd/directive';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
@Component({
  selector: 'edt-formly-editor',
  templateUrl: './formly-editor.component.html',
  host: { '[class.edt-formly-editor]': 'true' }
})
export class FormlyEditorComponent {
  @ContentChildren(NamedTemplate) children!: QueryList<NamedTemplate<NzSafeAny>>;

  fields = [];
  sItems: Array<any> = [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }, { name: 'item4' }, { name: 'item5' }];
  dItems: Array<any> = [];

  constructor() {}

  destinationDropped(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    if (event.previousContainer.data) {
      for (let i = this.sItems.length - 1; i >= 0; i--) {
        if (this.sItems[i].temp) this.sItems.splice(i, 1);
      }
    }
  }

  noReturnPredicate() {
    return false;
  }

  onSourceListExited(event: CdkDragExit<any>) {
    this.sItems.splice(event.container.getSortedItems().indexOf(event.item) + 1, 0, { ...event.item.data, temp: true });
  }

  onSourceListEntered(event: CdkDragEnter<any>) {
    for (let i = this.sItems.length - 1; i >= 0; i--) {
      if (this.sItems[i].temp) this.sItems.splice(i, 1);
    }
  }
}
