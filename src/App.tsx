/*
 * @FileDesc: App根组件
 */

import { ConfigProvider } from "antd-mobile/2x"
import { StrictMode } from "react"
import { RouterProvider } from "react-router-dom"

import { router } from "@/router"
import { setupApi, setupTheme, setupEruda } from "@/setup"

const App: React.FC = () => {

    /** FUN: 初始化 eruda 调试器 */
    setupEruda()

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
