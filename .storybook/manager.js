import { addons } from '@storybook/addons';
import { nzxAntdTheme } from './nzx-antd.theme';

/**
 * 此文件为固定名称, 管理storybook配置
 */
// 更多配置参考 https://storybook.js.org/docs/angular/configure/features-and-behavior
addons.setConfig({
  theme: nzxAntdTheme
});
