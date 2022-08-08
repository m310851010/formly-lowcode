import { Component, OnInit, Type } from '@angular/core';
import { FormlyEditorService } from '../../formly-editor.service';
import { CompositePanelComponents } from './composite-panel.module';
import { BasicCompositePanel, PanelInfo } from './basic-composite-panel';

@Component({
  selector: 'edt-composite-panel',
  templateUrl: './composite-panel.component.html',
  host: { '[class.edt-composite-panel]': 'true' }
})
export class CompositePanelComponent implements OnInit {
  selectedIndex = 0;
  tabs: TabItem[] = [];
  selectPanel?: TabItem;

  constructor(protected editorService: FormlyEditorService) {
    this.tabs = CompositePanelComponents.filter(type => this.ofPanel(type).PANEL_INFO)
      .sort((o1, o2) => (this.ofPanel(o1)!.PANEL_INFO?.sort || 0) - (this.ofPanel(o2)!.PANEL_INFO?.sort || 0))
      .map(type => {
        const info = this.ofPanel(type).PANEL_INFO!;
        return { ...info, component: type, tooltip: info.tooltip || info.title };
      });
    this.selectPanel = this.tabs[0];
  }

  ngOnInit(): void {
    this.editorService.classPrefix().subscribe();
  }

  private ofPanel(type: Type<any>): typeof BasicCompositePanel {
    return <typeof BasicCompositePanel>(<unknown>type);
  }
}

/**
 * 标签项
 */
interface TabItem extends PanelInfo {
  component?: Type<BasicCompositePanel>;
}
