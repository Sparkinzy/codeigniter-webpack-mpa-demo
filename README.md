# 框架结构
- CodeIgniter 3.10
- webpack 4
- Smarty 3.1.33

# 使用方式

## 创建新的模版页面
```bash

# Newpage 为自定义页面名称
# NewPage 格式可以为 module.controller.action
# 当生产模版文件次，上述模版，将自动生产到对应的目录
# /application/views/templates/module/controller/action.html
cd resources
npm run new default.product.show
```
以上命令将在 resources/src/pages下生成对应文件夹，并包含对应文件

src/pages/default.product.show/

src/pages/default.product.show/index.html

src/pages/default.product.show/index.js

src/pages/default.product.show/index.scss

在index.html 添加头部，底部文件是，使用ejs 引入
路径从当前html算起

<%= requre('html-loader!../header.inc.html')%>
img引入如片同样
<%= require('../../images/zdg.png')%>

## 进入开发模式
```bash
npm run dev
```

## 进入生产模式
```bash
npm run build
```
    
