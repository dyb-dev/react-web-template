/*
 * @Author: dyb-dev
 * @Date: 2025-02-10 22:36:27
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-26 13:29:23
 * @FilePath: /react-web-template/src/main.tsx
 * @Description: 程序入口文件
 */

import { createRoot } from "react-dom/client"

import App from "@/App.tsx"
// import { setupServiceWorker } from "@/sw"

import type { Container } from "react-dom/client"

import "./styles/index.scss"

/** TODO: 如果需要使用 PWA 则解开此段代码 */
// setupServiceWorker()

// 创建应用
const app = createRoot(document.getElementById("app") as Container)

// 渲染应用
app.render(<App />)
