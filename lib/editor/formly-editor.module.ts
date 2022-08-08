import { NgModule } from '@angular/core';
import { FormlyEditorComponent } from './formly-editor.component';
import { CommonModule } from '@angular/common';
import { EditorLayoutModule } from '../layouts/editor-layout.module';
import { FormlyEditorService } from '../formly-editor.service';

@NgModule({
  declarations: [FormlyEditorComponent],
  imports: [CommonModule, EditorLayoutModule],
  providers: [FormlyEditorService],
  exports: [FormlyEditorComponent]
})
export class FormlyEditorModule {}
