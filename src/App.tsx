/*
 * @Author: dyb-dev
 * @Date: 2025-02-10 22:36:27
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-26 13:26:50
 * @FilePath: /react-web-template/src/App.tsx
 * @Description: App根组件
 */

import { ConfigProvider } from "antd-mobile/2x"
import { StrictMode } from "react"
import { RouterProvider } from "react-router-dom"

import { useSetupApi, useSetupTheme, useSetupVConsole } from "@/hooks"
import { router } from "@/router"

const App: React.FC = () => {

    /** HOOKS: 使用初始化 VConsole 调试器 */
    useSetupVConsole()

    /** HOOKS: 使用初始化接口配置 */
    useSetupApi()

    /** HOOKS: 使用初始化主题 */
    useSetupTheme()

    return (
        <StrictMode>
            <ConfigProvider>
                <RouterProvider router={router} />
            </ConfigProvider>
        </StrictMode>
    )

}

export default App
