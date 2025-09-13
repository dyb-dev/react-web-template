/*
 * @Author: dyb-dev
 * @Date: 2025-09-13 00:51:00
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 19:11:38
 * @FilePath: /react-web-template/src/components/LoadingWrapper/LoadingWrapper.tsx
 * @Description: 加载中包装组件
 */

import { SpinLoading } from "antd-mobile/2x"
import { memo } from "react"

import type { SpinLoadingProps } from "antd-mobile/2x"
import type { ReactNode } from "react"

import "./LoadingWrapper.scss"

/** 加载中状态包装器 Props */
export interface ILoadingWrapperProps extends SpinLoadingProps {
    /**
     * 是否显示内容
     *
     * @default false
     */
    showContent?: boolean
    /**
     * 加载图标大小
     *
     * @default '24px'
     */
    size?: string
    /**
     * 加载图标颜色
     *
     * @default 'default'
     */
    color?: SpinLoadingProps["color"]
    /**
     * 子元素
     * - 支持 ReactNode 或返回 ReactNode 的函数
     */
    children?: ReactNode | (() => ReactNode)
}

/** 加载中状态包装器 */
export const LoadingWrapper = memo(function LoadingWrapper (props: ILoadingWrapperProps) {

    const { showContent = false, children, size = "24px", color = "primary", style, ...spinLoadingProps } = props

    // 如果不显示内容，渲染加载状态
    if (!showContent) {

        return (
            <div className="loading-wrapper">
                <SpinLoading {...spinLoadingProps} style={{ "--size": size, ...style }} color={color} />
            </div>
        )

    }

    return typeof children === "function" ? children() : children

})
