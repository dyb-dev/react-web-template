/*
 * @Author: dyb-dev
 * @Date: 2025-09-12 22:01:33
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 14:25:23
 * @FilePath: /react-web-template/src/components/popup/DemoPopup/Children/Children.tsx
 * @Description: 子组件
 */

import { Button } from "antd-mobile/2x"
import { memo } from "react"

import { usePopupContext } from "@/components"

import type { IShowDemoPopupResult } from ".."

import "./Children.scss"

/** 子内容组件 Props */
export interface IChildrenProps {
    /** 标题 */
    title: string
}

export const Children = memo(function Children (props: IChildrenProps) {

    const { title } = props

    /** HOOKS: 使用弹窗上下文 */
    const { loadStatus, close, result } = usePopupContext<IShowDemoPopupResult>()

    return (
        <div className="demo-popup__children">
            <div className="demo-popup__children__title">{title}</div>
            <Button
                color="primary"
                size="middle"
                loading={loadStatus === "loading" && result.actionType === "cancel"}
                onClick={() => {

                    close({ actionType: "cancel", data: "点击取消按钮" })

                }}
            >
                取消
            </Button>
            <Button
                color="primary"
                size="middle"
                loading={loadStatus === "loading" && result.actionType === "confirm"}
                onClick={() => {

                    close({ actionType: "confirm", data: "点击确认按钮" })

                }}
            >
                确认
            </Button>
        </div>
    )

})
