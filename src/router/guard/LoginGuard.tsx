/*
 * @Author: dyb-dev
 * @Date: 2025-02-19 12:01:01
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-02-22 15:06:21
 * @FilePath: /react-web-template/src/router/guard/LoginGuard.tsx
 * @Description: 登录守卫组件
 */

import { memo, useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"

import { LoadBox } from "@/components"
import { useUserInfoStore } from "@/stores"
import { mergeUrlQuery } from "@/utils"

import type { ReactElement } from "react"
import type { To } from "react-router-dom"

/** CONST: 环境变量 */
const { VITE_LOGIN_ROUTE, VITE_NEED_LOGIN_ROUTES } = __PROJECT_INFO__.env

/** CONST: 需要登录的路由列表 */
const NEED_LOGIN_ROUTE_LIST = VITE_NEED_LOGIN_ROUTES.split(",")

/** 组件Props */
export interface ILoginGuardProps {
    /** 传入的子元素 */
    children: ReactElement
}

export const LoginGuard = memo(({ children }: ILoginGuardProps) => {

    // 获取当前路由信息
    const { pathname, search } = useLocation()
    // 获取用户登录状态
    const { isCheckedLogin, isLogin, checkLogin } = useUserInfoStore(({ isCheckedLogin, isLogin, checkLogin }) => ({
        isCheckedLogin,
        isLogin,
        checkLogin
    }))

    // 首次挂载该组件时
    useEffect(() => {

        // 检测登录状态
        checkLogin()

    }, [checkLogin])

    // 避免未完成登录检测时渲染
    if (!isCheckedLogin) {

        return <LoadBox />

    }

    // 如果当前路由为需要登录的路由且未登录
    if (NEED_LOGIN_ROUTE_LIST.includes(pathname) && !isLogin) {

        // 跳转登录页路由配置
        const _to: To = {
            pathname: VITE_LOGIN_ROUTE,
            search: mergeUrlQuery(search, { redirectRoute: pathname })
        }

        return <Navigate to={_to} replace />

    }

    return children

})
