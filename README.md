## 1. floodRiskAssessment-vue后台模板简介
>这个项目主要是参考vue-xuAdmin模板来进行改进，根据业务需求增加了很多vue组件的基本功能。基本技术架构为vue2.0全家桶+element-ui+leaflet组件库,实际上这个项目是整个大项目的前端部分，后期也会上传后端架构，目前设想是采用springboot+maybatis-Plus+kafka+redis。本人主要技术栈以后端架构为主，因此前端设计和整体代码逻辑可能有些许问题，希望多多包含。

> 项目中可能比较难理解的地方在于权限设计，该权限设计核心思想是根据不同权限显示不同的菜单栏。此部分由原模板vue-xuAdmin开发，感兴趣可在github上搜vue-xuAdmin，参考相关代码释义，其中原版项目地址为https://nirongxu.github.io/vue-xuAdmin/dist/。


![enter description here](https://www.github.com/Nirongxu/xiaoshujiang/raw/master/1552796499128.png)
![enter description here](https://www.github.com/Nirongxu/xiaoshujiang/raw/master/1552796567032.png)
![enter description here](https://i.loli.net/2018/12/12/5c10a2f90e38a.jpg)
![enter description here](https://i.loli.net/2018/12/16/5c153f4998458.jpg)
![enter description here](https://i.loli.net/2018/12/16/5c153fe516daf.jpg)
![enter description here](https://i.loli.net/2018/12/12/5c102c115c130.jpg)
## 2. 准备工作
-开发环境
- node.js v8.0+
- webpack v3
- git

-技术栈
- ES6+
- vue v2.5+
- vue-router
- vuex
- axios
- scss
- element-ui v2.4+
- vue2leaflet

## 3. 实现功能
```
主要是偏业务的操作，可以理解成对各个组件库的使用

```
## 4.开发使用
### 4.1开发
```
# 克隆项目
git clone https://github.com/xc19950304/floodRiskAssessment-vue.git

# 安装依赖 (如果安装失败就多安装几次，实在不行就换淘宝镜像)
npm install

# 启动项目 (已经配置好启动服务自动打开浏览器，如果没自动打开按照控制台输出的地址自己打开)
# 如果eslint语法检查报错，直接关掉eslint语法检查
npm run dev

# 启动单元测试
npm run unit

# 启动端到端测试
 npm run e2e

# 启动编译打包生产环境
 npm run build
```

## 5. 项目结构说明
```
|------------build          构建脚本目录

    |---------build.js             生产环境构建脚本

    |---------check-version.js 检查node、npm等版本

    |---------dev-client.js     开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新

    |---------dev-server.js     运行本地开发服务器

    |---------utils.js               构建相关工具方法

    |---------vebpack.base.conf.js     webpack基本配置

    |---------vebpack.dev.conf.js       webpack开发环境配置

    |---------vebpack.prod.conf.js     webpack生产环境配置   

|------------config           项目配置

    |---------dev.env.js           开发环境变量

    |---------index.js              项目配置文件

    |---------prod.env.js         生产环境变量

|------------dist             使用生产环境配置构建项目，构建好的目录放到该目录

|------------node_modules         node的依赖包

|------------src

    |---------assets                 资源目录，这里的资源会被webpack构建

    |---------components        		组件目录

    |---------i18n					        多语言国际化

    |---------router

    |-----------index.js               前端路由

    |---------views					页面文件

    |---------vuex					全局状态管理目录

    |--------App.vue                	根组件

    |--------main.js                 入口js文件

|------------static             纯静态资源，不会被webpack构建

|------------index.html         入口页面

|------------test        		单元测试

|------------.babelrc            ES6语法编译配置

|-----------.editorconfig      	定义代码格式

|-----------.gitignore         	git 上传需要忽略的文件

|-----------package.json       项目基本信息

---------------------
```
## 结语
如果这个框架对你有帮助的话，请给个星点个star
