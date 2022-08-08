import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { Subject, takeUntil } from 'rxjs';
import { IEditorFormlyField } from '../../editor.types';
import { FormlyEditorService } from '../../formly-editor.service';

@Component({
  selector: 'edt-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  host: { '[class.edt-widget-wrapper]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetWrapperComponent extends FieldWrapper<IEditorFormlyField> implements OnInit, OnDestroy {
  @HostBinding('class.edit-mode') get isEditMode(): boolean {
    return this.editorService?.isEditMode;
  }
  @HostBinding('class.active') get isActiveField(): boolean {
    return this._isActiveField;
  }

  @HostBinding('class.hover') get isHoverField(): boolean {
    return this.isMouseInside && !this._isActiveField && !this.editorService.dragStart;
  }
  isMouseInside = false;
  isFirstChild = false;
  isLastChild = false;
  index = 0;

  private _destroy$ = new Subject<void>();
  private _isActiveField = false;

  constructor(public editorService: FormlyEditorService, private cdr: ChangeDetectorRef) {
    super();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.editorService.selectField(this.field.fieldId!);
    event.stopPropagation();
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent): void {
    this.isMouseInside = true;
    event.stopPropagation();
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut(event: MouseEvent): void {
    this.isMouseInside = false;
  }

  ngOnInit(): void {
    this._checkIndexField();
    this._checkActiveField();
    this.editorService.fieldSelected$.pipe(takeUntil(this._destroy$)).subscribe(() => {
      this._checkIndexField();
      this._checkActiveField();
      this.cdr.markForCheck();
    });
  }

  private _checkIndexField(): void {
    const siblings = this.editorService.getSiblings(this.field.parentFieldId);
    this.index = siblings.findIndex(f => f.fieldId === this.field.fieldId);
    this.isFirstChild = this.index === 0;
    this.isLastChild = this.index === siblings.length - 1;
  }

  private _checkActiveField(): void {
    this._isActiveField = this.editorService.isActiveField(this.field.fieldId!);
  }

  onRemoveField() {
    this.editorService.removeField(this.field.fieldId!, this.field.parentFieldId);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
