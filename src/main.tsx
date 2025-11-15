/*
 * @FileDesc: 程序入口文件
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
