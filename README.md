## 分模块打包前端代码需求概述
1，公共资源打成一个文件：common.js
2，每一个页面出一个文件：[page-name].js
3，支持es6，es7，es2017等语法

## flow
- Automatic Browser Refresh 
- lint js => eslint-loader
- lint css => stylelint-loader
- compile js => babel-loader
- compile css => style-loader, css-loader, postcss-loader
- code split => CommonChunksPlugin

