# formly-lowcode


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

为该项目点个免费的星⭐
