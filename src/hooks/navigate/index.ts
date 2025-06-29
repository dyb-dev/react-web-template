/*
 * @Author: dyb-dev
 * @Date: 2025-02-21 16:49:56
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-06-29 20:46:44
 * @FilePath: /react-web-template/src/hooks/navigate/index.ts
 * @Description: 导航相关hooks函数
 */

import { useNavigate as useRouterNavigate } from "react-router-dom"

import { mergeUrlQuery } from "@/utils"

import type { NavigateOptions as RouterNavigateOptions } from "react-router-dom"

/** 导航选项 */
interface INavigateOptions extends RouterNavigateOptions {
    /** 路由路径 */
    path: string
    /** 查询参数 */
    query?: Record<string, any>
}

/** `useNavigate` 返回的类型 */
interface IUseNavigateReturn {
    /** 导航 */
    navigate: (options: INavigateOptions | string) => void
    /** 返回 */
    back: (delta?: number) => void
}

/**
 * HOOKS: 使用导航
 *
 * @author dyb-dev
 * @date 21/02/2025/  17:06:07
 * @returns {*} {IUseNavigate}
 */
const useNavigate = (): IUseNavigateReturn => {

    const _routerNavigate = useRouterNavigate()

    const navigate = (options: INavigateOptions | string) => {

        if (typeof options === "string") {

            _routerNavigate(options)

        }
        else {

            const { path, query = {}, ...rest } = options
            _routerNavigate(mergeUrlQuery(path, query), rest)

        }

    }

    const back = (delta: number = -1) => {

        _routerNavigate(delta)

    }

    return { navigate, back }

}

export type { IUseNavigateReturn, INavigateOptions }

export { useNavigate }
