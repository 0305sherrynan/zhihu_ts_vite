# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## project used technology stack
- vue3 setup
- TypeScript
- pinia
- less
- bootstrap
- vue-router
- axios

## project directory
   - components 
     - GlobalHeader.vue 顶部导航栏 不随界面变化而变化
   - base 基础构件
     - DorpdownItem.vue 下拉框的单个框
     - DropDown.vue 下拉框 
   - store pinia使用
     - index.ts 入口
     - user.ts 用户数据状态
   - types 放置接口和enum
     - api.d.ts 放置接口相关的数据结构
     - store.d.ts 放置store数据类型接口
     - ui.d.ts 放置libs/zwzUI 的数据类型接口
   - hooks 放置封装好的有关声明周期函数的函数
     - event
       - isClickOutPage.ts 监听是否点击在外面
     - dom 
     - createDom 创建一个dom元素并挂载到dom
   - router 路由
     - index.ts 路由入口
   - design css,less全局变量
     - base
       - btn.less 按钮的封装样式
       - index.ts base的入口
     - index.ts design的入口
   - libs 一些库的封装
     - axios
     - zwzUI 自定义UI
       - message.ts 封装Message
     - storage 封装存储
       - index.ts
   - utils 工具类的封装
     - api 前后端链接
       - user.ts