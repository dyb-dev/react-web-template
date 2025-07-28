/*
 * @Author: dyb-dev
 * @Date: 2025-02-10 22:36:27
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-28 13:35:13
 * @FilePath: /react-web-template/src/App.tsx
 * @Description: App根组件
 */

import { ConfigProvider } from "antd-mobile/2x"
import { StrictMode } from "react"
import { RouterProvider } from "react-router-dom"

import { router } from "@/router"
import { setupApi, setupTheme, setupVConsole } from "@/setup"

const App: React.FC = () => {

    /** FUN: 使用初始化 VConsole 调试器 */
    setupVConsole()

    /** FUN: 使用初始化接口配置 */
    setupApi()

    /** FUN: 使用初始化主题 */
    setupTheme()

    return (
        <StrictMode>
            <ConfigProvider>
                <RouterProvider router={router} />
            </ConfigProvider>
        </StrictMode>
    )

}

export default App
