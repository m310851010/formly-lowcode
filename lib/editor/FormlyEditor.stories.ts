import { CommonModule } from '@angular/common';

import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { storyFactory } from '@stories';
import { action } from '@storybook/addon-actions';
import { EditorLayoutModule, FormlyEditorComponent, FormlyEditorService } from '@xmagic/formly-lowcode';

export default {
  title: '组件/FormlyEditor 设计器',
  component: FormlyEditorComponent,
  decorators: [
    moduleMetadata({
      declarations: [FormlyEditorComponent],
      imports: [CommonModule, EditorLayoutModule],
      providers: [FormlyEditorService]
    })
  ],
  argTypes: {},
  args: {
    nzxBlur: action('nzxBlur'),
    nzxFocus: action('nzxFocus'),
    nzxValue: []
  },
  parameters: {
    controls: {
      exclude: [
        'children',
        'fields',
        'sItems',
        'dItems',
        'destinationDropped',
        'noReturnPredicate',
        'onSourceListExited',
        'onSourceListEntered'
      ]
    }
  },
  docs: {
    moduleName: '',
    importName: ''
  }
} as Meta;

const Template: (props?: Partial<FormlyEditorComponent>) => Story<FormlyEditorComponent> = storyFactory;

export const Default = Template({});
