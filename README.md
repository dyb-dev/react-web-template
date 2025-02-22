# React-Web-Template

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)

## 项目简介

React-Web-Template 提供了一个用于开发Web移动端网站的基本模板，该项目基于 [React](https://zh-hans.react.dev/) + [TS](https://www.typescriptlang.org/) + [Vite](https://cn.vitejs.dev/) 构建，该模板预配置了一些常用的开发工具和插件，帮助你快速开发Web移动端网站，为您带来极致的体验。

## 功能特点

- **移动端自适应布局**: 支持移动端自适应布局，采用了 px 转换为 vw 的架构，行内样式也可以进行动态转换，无需手动计算。同时，支持 PC 端和手机横屏的适配。
- **TypeScript 开发**: 项目使用 TypeScript 进行开发，支持模块化管理，保证了项目的可维护性和开发效率。
- **Sass 预处理器**: 内置了 Sass 预处理器，支持常用的 Sass mixin 和函数，帮助你更高效地编写样式代码。
- **丰富的组件库**: 项目集成了 `ant-design-mobile` 组件库，提供丰富的组件并且具有良好的 TypeScript 类型提示，提升开发效率。
- **常用工具库**: 项目内置了 `axios`、`dayjs`、`query-string`、`use-immer`、`react-router-dom`、`zustand` 和 `classnames` 等常用工具库，并提供了一些二次封装的函数，方便开发使用。
- **个性化主题支持**: 支持个性化主题配置，内置了一套独立的主题系统，且支持浅色和深色主题的切换，增强了用户界面的灵活性和美观度。
- **兼容性支持**: 项目支持旧版浏览器和新版浏览器的脚本与样式的兼容性，通过 `@vitejs/plugin-legacy` 插件，实现对不同浏览器之间的支持。
- **HTTPS 支持**: 项目支持本地开发环境下运行 HTTPS 协议，提供安全的本地服务，同时内置了插件，可以修改构建产物中的 HTML 文件类型。
- **自定义构建模块**: 支持自定义构建产物的模块分配，灵活地调整构建结果，满足不同项目的需求。
- **PWA 支持**: 项目内置了 PWA（渐进式 Web 应用）方案，支持离线缓存策略和资源预缓存，提供更快的加载速度和离线体验。
- **移动端调试工具**: 在移动端调试中，集成了 `vconsole`，帮助开发者方便地查看和调试移动端的日志和错误信息。
- **代码风格管理**: 预配置了 ESLint、Stylelint 及 Prettier 工具，集成自定义的 ESLint、Stylelint 规则集，帮助开发者统一代码风格。

## TODO: 未完成

由于暂时精力有限，以下功能会在后期陆续完善，但基本不影响目前正常使用：

1. **基于文件系统自动创建路由配置**，并监听文件操作动态更新路由配置。
2. **基于页面的维度设置 CSS 作用域**，以实现类似 Vue 中 `scoped` 的效果，目前仅用 BEM 规范作为后备方案。

## 安装与使用

你可以使用 npm、pnpm 或 yarn 等包管理器来安装项目依赖。推荐使用 pnpm 作为首选包管理器。在下面的示例中，我们默认使用 pnpm 进行演示：

### 环境要求

- Node.js 版本 >= 22.0.0
- 如果包管理器为 pnpm，版本需 >= 9.9.0

### 环境变量配置

该模板项目支持通过 `.env` 文件进行环境变量配置，你可以根据实际需要修改 `.env` 中的配置项。

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

### 构建产物

```bash
pnpm build
```

### 预览产物

```bash
pnpm preview
```

### 版本升级 & Git提交

```bash
pnpm release
```

## 许可证

本项目基于 `MIT 许可证` 开源。
