
# formly-lowcode

`formly-lowcode`是一个基于`angular`开发的低代码设计器，它以组件的形式发布。使用`ng-zorro-antd` UI库构建界面。全部代码开源并遵循 `MIT` 协议，任何企业、组织及个人均可免费使用。

![License](https://img.shields.io/badge/License-MIT-blue.svg)
[![Angular](https://img.shields.io/badge/Build%20with-Angular%20CLI-red?logo=angular)](https://www.github.com/angular/angular)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://m310851010.github.io/formly-lowcode)

> **注意**: 此项目还在开发阶段，请谨慎使用

## 文档和示例

查看 [文档](https://m310851010.github.io/formly-lowcode)

查看 [示例](https://m310851010.github.io/formly-lowcode/iframe.html?viewMode=story&id=组件-formlyeditor-设计器--default)


## 🖥使用环境

- [Angular](https://angular.io) >= v13.0.0
- [ng-zorro-antd](https://ng.ant.design) >= v13.0.0

## 📦安装

```shell
npm i @xmagic/formly-lowcode --save
```

## 🔨使用


## 🍏引入样式

> 有两种方式引入样式, 在 `angular.json` 中 或者 `style.less`中, 任选其一

- 在 `angular.json` 中引入

```json
{
  "styles": [
    "node_modules/@xmagic/nzx-antd/nzx-antd.less",
    "@xmagic/formly-editor/formly-editor.less",
    "@xmagic/formly-editor/assets/iconfont/iconfont.css"
  ]
}
```

- 在 `style.less` 中引入 `less` 样式文件

```less
@import '@xmagic/nzx-antd/nzx-antd.less';
@import '@xmagic/formly-editor/formly-editor.less';
@import '@xmagic/formly-editor/assets/iconfont/iconfont.css';
```

## 🍎引入模块

1. 修改`AppModule` 导入`FormlyEditorModule`模块

```ts
// app.module.ts

import { NgModule } from '@angular/core';
import { FormlyEditorModule } from '@xmagic/formly-editor/formly-editor.module';

@NgModule({
  imports: [
    FormlyEditorModule
  ],
  bootstrap: [AppComponent]
})
export class AppComponent {}
```

2. 修改`AppComponent`渲染设计器

```ts
//app.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpLoadingService, LogoutService } from '@xmagic/nzx-antd/http-interceptor';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzxModalWrapService } from '@xmagic/nzx-antd/modal';
import { loadingService } from '@xmagic/nzx-antd/service';

@Component({
  selector: 'app-root',
  template: '<edt-formly-editor></edt-formly-editor>',
})
export class AppComponent implements OnInit {
  constructor( ) {}

  ngOnInit(): void {
  }
}
```

## 🏴授权协议

[MIT](https://raw.githubusercontent.com/m310851010/formly-lowcode/main/LICENSE)

## 👍支持

<div className="doc-tip-wrapper">
  <span className="doc-tip">提示</span> 为该项目点个免费的星⭐
</div>
