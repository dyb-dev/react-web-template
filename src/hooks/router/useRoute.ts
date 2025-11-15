/*
 * @FileDesc: 使用路由
 */

import { useMatches } from "react-router-dom"

import type { IHandle } from "react-router-dom"

/**
 * HOOKS: 使用路由
 *
 * @author dyb-dev
 * @date 2025-09-11 03:57:04
 * @template Data 路由加载器结果数据
 * @template Handle 路由绑定数据对象
 * @returns {*} {UIMatch<Data, Handle>} 当前路由信息
 */
export const useRoute = <Data = unknown, Handle = IHandle>() => {

    /** HOOKS: 使用路由匹配集合 */
    const matches = useMatches<Data, Handle>()

    /** CONST: 当前路由信息 */
    const currentRoute = matches[matches.length - 1]

    return currentRoute

}
