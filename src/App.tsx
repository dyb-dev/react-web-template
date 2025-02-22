/*
 * @Author: dyb-dev
 * @Date: 2025-02-10 22:36:27
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-02-20 12:15:24
 * @FilePath: /react-web-template/src/App.tsx
 * @Description: App根组件
 */

import { ConfigProvider } from "antd-mobile/2x"
import { StrictMode } from "react"
import { RouterProvider } from "react-router-dom"

import { router } from "@/router"

const App: React.FC = () => {

    return (
        <StrictMode>
            <ConfigProvider>
                <RouterProvider router={router} />
            </ConfigProvider>
        </StrictMode>
    )

}

export default App
