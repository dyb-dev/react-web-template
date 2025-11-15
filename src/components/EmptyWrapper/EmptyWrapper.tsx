/*
 * @FileDesc: 空状态包装组件
 */

import { ErrorBlock } from "antd-mobile/2x"
import classNames from "classnames"
import { memo } from "react"

import type { ErrorBlockProps } from "antd-mobile/2x"
import type { ReactNode } from "react"

import "./EmptyWrapper.scss"

/** 空状态包装器 Props */
export interface IEmptyWrapperProps extends Omit<ErrorBlockProps, "children"> {
    /**
     * 是否显示内容
     *
     * @default false
     */
    showContent?: boolean
    /**
     * 子元素
     * - 支持 ReactNode 或返回 ReactNode 的函数
     */
    children?: ReactNode | (() => ReactNode)
}

/** 空状态包装器 */
export const EmptyWrapper = memo(function EmptyWrapper (props: IEmptyWrapperProps) {

    const {
        showContent = false,
        children,
        className,
        image = "https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",
        title = "暂无数据",
        description = "",
        ...errorBlockProps
    } = props

    // 如果不显示内容，渲染空状态
    if (!showContent) {

        return (
            <ErrorBlock
                {...errorBlockProps}
                className={classNames("empty-wrapper", className)}
                image={image}
                title={title}
                description={description}
            />
        )

    }

    return typeof children === "function" ? children() : children

})
