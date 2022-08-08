import { TestBed } from '@angular/core/testing';

import { FormlyEditorService } from './formly-editor.service';

describe('FormlyEditorService', () => {
  let service: FormlyEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormlyEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
