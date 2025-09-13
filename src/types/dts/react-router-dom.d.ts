/*
 * @Author: dyb-dev
 * @Date: 2025-09-11 03:19:08
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 14:14:42
 * @FilePath: /react-web-template/src/types/dts/react-router-dom.d.ts
 * @Description: react-router-dom 类型声明补充文件
 */

import type { UIMatch, IndexRouteObject, NonIndexRouteObject } from "react-router-dom"

declare module "react-router-dom" {
    /** 路由绑定数据对象 */
    interface IHandle {
        /**
         * 路由标题
         * - 可用于侧边栏、面包屑等
         *
         * @default ""
         */
        title?: string
        /**
         * 是否需要登录
         *
         * @default false
         */
        requireAuth?: boolean
    }

    /** 路由索引对象 */
    interface IIndexRouteObject extends IndexRouteObject {
        /** 路由绑定数据对象 */
        handle?: IHandle
    }

    /** 非路由索引对象 */
    interface INonIndexRouteObject extends NonIndexRouteObject {
        /** 路由绑定数据对象 */
        handle?: IHandle
        /** 子路由 */
        children?: TRouteObject[]
    }

    /** 路由对象 */
    type TRouteObject = IIndexRouteObject | INonIndexRouteObject

    /**
     * 使用路由匹配集合
     *
     * @returns 匹配路由集合
     */
    declare function useMatches<Data = unknown, Handle = IHandle>(): UIMatch<Data, Handle>[]
}
