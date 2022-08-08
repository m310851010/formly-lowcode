import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IEditorFormlyField } from '../../editor.types';
import { Subject, takeUntil } from 'rxjs';
import { ConfigOption, FORMLY_CONFIG } from '@ngx-formly/core';
import { FormlyEditorService } from '../../formly-editor.service';

@Component({
  selector: 'edt-workspace-viewport',
  templateUrl: './workspace-viewport.component.html',
  host: { '[class.edt-workspace-viewport]': 'true' }
})
export class WorkspaceViewportComponent implements OnInit, OnChanges {
  formGroup = new FormGroup({});
  // @ts-ignore
  @Input() fields: Array<IEditorFormlyField> = [];
  model = {};
  options = {};
  modelChanged = new EventEmitter();
  private _destroy$: Subject<void> = new Subject();

  constructor(
    public editorService: FormlyEditorService,
    @Optional() @Inject(FORMLY_CONFIG) configs: ConfigOption[] = []
  ) {
    console.log(configs);
  }

  ngOnChanges(changes: { [K in keyof this]?: SimpleChange } & SimpleChanges): void {
    console.log('ngOnChanges==', this.fields);
    this.editorService.resetField(this.fields);
  }

  ngOnInit(): void {
    this.editorService.resetField(this.fields);
    this.editorService
      .fieldsChange()
      .pipe(takeUntil(this._destroy$))
      .subscribe(fields => {
        this.fields = fields;
        this.formGroup = new FormGroup({});
        this.options = {};
      });
  }

  modelChangedx(evt: any) {
    console.log('modelChangedx==', evt);
  }

  /** Clamps a number between zero and a maximum. */
  clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
  }
}
