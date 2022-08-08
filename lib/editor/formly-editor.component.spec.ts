import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyEditorComponent } from './formly-editor.component';

describe('FormlyEditorComponent', () => {
  let component: FormlyEditorComponent;
  let fixture: ComponentFixture<FormlyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
