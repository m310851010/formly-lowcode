import { InputType } from '@storybook/csf';
import { Story } from '@storybook/angular';
// 控件类型
// https://storybook.js.org/docs/angular/essentials/controls
export const EXCLUDE_PARAMS = [
  'setDisabledState',
  'registerOnChange',
  'registerOnTouched',
  'onChange',
  'onTouched',
  'writeValue',
  'ngModelChange'
];

export const SIZE_ARG_TYPE = {
  control: 'inline-radio',
  options: ['large', 'default', 'small'],
  defaultValue: 'default'
};

export const HIDE_CONTROL = {
  table: { defaultValue: { summary: null } },
  control: false
};

/**
 * storybook 模板工程
 * @param props 传递的参数
 * @param template 模板
 */
export function storyFactory<T>(props?: Partial<T>, template?: string): Story<T> {
  const fn: Story<T> = args => {
    return {
      props: args,
      template
    };
  };
  if (props) {
    fn.args = props;
  }
  return fn;
}

/**
 * 隐藏指定属性的control,　属性不隐藏
 * @param props 属性名称列表
 */
export function hideControlArgType<T>(...props: (keyof T)[]): Record<string, InputType> {
  return props.reduce((prev, curr) => {
    prev[curr] = { ...HIDE_CONTROL };
    return prev;
  }, {} as Record<keyof T, InputType>);
}

/**
 * 隐藏属性
 */
export const HIDE_CONTROL_COMMONS = hideControlArgType('nzxValue');
