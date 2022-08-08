export abstract class BasicCompositePanel {
  /**
   * 面板组件基本信息
   */
  static readonly PANEL_INFO?: PanelInfo;
}

/**
 * 配置面板信息
 */
export interface PanelInfo {
  sort?: number;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 图标的HTML
   */
  iconHtml?: string;
  /**
   * 面板标题
   */
  title: string;
  /**
   * 提示信息
   */
  tooltip?: string;
  /**
   * 面板是否有padding
   */
  hasCardPadding?: boolean;
}
