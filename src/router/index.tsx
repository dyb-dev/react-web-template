/*
 * @Author: dyb-dev
 * @Date: 2025-09-13 00:42:46
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 14:16:51
 * @FilePath: /react-web-template/src/router/index.tsx
 * @Description: 路由模块
 */

import { lazy, Suspense } from "react"
import { createBrowserRouter, Navigate, useLocation } from "react-router-dom"

import { LoadingWrapper } from "@/components"

import { LoginGuard } from "./guard"

import type { TRouteObject } from "react-router-dom"

/** CONST: 环境变量 */
const { VITE_BASE_PATH, VITE_HOME_ROUTE, VITE_LOGIN_ROUTE, VITE_HTML_FILE_TYPE } = __PROJECT_INFO__.env

/** LET: 路由列表 */
let routes: TRouteObject[] = [
    {
        path: VITE_HOME_ROUTE,
        Component: lazy(() => import("@/views/home/home")),
        handle: {
            title: "首页"
        },
        children: [
            {
                index: true,
                Component: lazy(() => import("@/views/home/index")),
                handle: {
                    title: "index 子路由"
                }
            },
            {
                path: "two",
                Component: lazy(() => import("@/views/home/two/two")),
                handle: {
                    title: "two 子路由"
                }
            }
        ]
    },
    {
        path: VITE_LOGIN_ROUTE,
        Component: lazy(() => import("@/views/login/login")),
        handle: {
            title: "登录"
        }
    },
    {
        path: "/test",
        Component: lazy(() => import("@/views/test/test")),
        handle: {
            title: "测试",
            requireAuth: true
        }
    }
    // 其他页面路由在这里添加
]

routes = [
    ...routes,
    // 通配符，匹配所有未定义的路由，需放在最后
    {
        path: "*",
        Component: lazy(() => import("@/views/not-found/not-found"))
    }
]

// CONST: 导航至首页组件
const NavigateToHome = () => <Navigate to={`${VITE_HOME_ROUTE}${useLocation().search ?? ""}`} replace />

/** CONST: 路由实例 */
export const router = createBrowserRouter(
    [
        ...routes.map(({ Component, ...route }) => ({
            ...route,
            element:
                <LoginGuard>
                    {/* 在这里可以添加其他守卫组件 */}
                    <Suspense fallback={<LoadingWrapper />}>{Component && <Component />}</Suspense>
                </LoginGuard>

        })),
        {
            path: "/",
            Component: NavigateToHome
        },
        {
            path: `/index.${VITE_HTML_FILE_TYPE}`,
            Component: NavigateToHome
        }
    ],
    {
        basename: VITE_BASE_PATH
    }
)
