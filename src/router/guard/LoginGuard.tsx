/*
 * @FileDesc: 登录守卫组件
 */

import { memo, useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"

import { LoadingWrapper } from "@/components"
import { useRoute } from "@/hooks"
import { useUserInfoStore } from "@/stores"
import { mergeUrlQuery } from "@/utils"

import type { ReactElement } from "react"
import type { To } from "react-router-dom"

/** CONST: 环境变量 */
const { VITE_LOGIN_ROUTE } = __PROJECT_INFO__.env

/** 组件Props */
export interface ILoginGuardProps {
    /** 传入的子元素 */
    children: ReactElement
}

export const LoginGuard = memo(function LoginGuard({ children }: ILoginGuardProps) {

    /** HOOKS: 使用路由 */
    const currentRoute = useRoute()

    /** HOOKS: 使用位置 */
    const { pathname, search } = useLocation()

    /** HOOKS: 用户信息状态 */
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

        return <LoadingWrapper />

    }

    /** 当前路由是否需要登录 */
    const requireAuth = currentRoute?.handle?.requireAuth ?? false

    // 如果当前路由不需要登录或已登录
    if (!requireAuth || isLogin) {

        return children

    }

    // 跳转登录页路由配置
    const to: To = {
        pathname: VITE_LOGIN_ROUTE,
        search: mergeUrlQuery(search, { redirectRoute: pathname })
    }

    return <Navigate to={to} replace />

})
