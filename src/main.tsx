/*
 * @Author: dyb-dev
 * @Date: 2025-02-10 22:36:27
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-02-22 18:00:26
 * @FilePath: /react-web-template/src/main.tsx
 * @Description: 程序入口文件
 */

import { createRoot } from "react-dom/client"

import { setupApi } from "@/apis"
import App from "@/App.tsx"
// import { setupServiceWorker } from "@/sw"
import { setupTheme } from "@/theme"
import { isEnableDebug } from "@/utils"

import type { Container } from "react-dom/client"

import "./styles/index.scss"

/** TODO: 如果需要使用 PWA 则解开此段代码 */
// setupServiceWorker()

// 启用调试时
if (isEnableDebug()) {

    import("vconsole")
        .then(({ default: VConsole }) => {

            window.vConsole = new VConsole()

            console.log("[项目信息]", __PROJECT_INFO__)

        })
        .catch(error => {

            console.error("VConsole 加载失败", error)

        })

}

/** 是否使用暗黑主题 */
if (__PROJECT_INFO__.env.VITE_DARK === "true") {

    // 设置主题
    setupTheme()

}

// 设置接口配置
setupApi()

// 创建应用
const app = createRoot(document.getElementById("app") as Container)

// 渲染应用
app.render(<App />)
