/*
 * @Author: dyb-dev
 * @Date: 2025-09-13 14:24:03
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 17:28:43
 * @FilePath: /react-web-template/src/components/popup/Popup/Popup.tsx
 * @Description: 弹出层
 */

import { Popup as AntdPopup } from "antd-mobile/2x"
import { memo, useCallback, useMemo } from "react"
import { useImmer } from "use-immer"

import { useAsyncTask } from "@/hooks"

import { Provider } from "./context"

import type { IContext } from "./context"
import type { IBaseResult, IDefaultProps, IDefaultResult } from "@/utils"
import type { PopupProps } from "antd-mobile/2x"

/** 弹出层 Props */
export interface IPopupProps<Result extends IBaseResult = IDefaultResult>
    extends IDefaultProps<Result>,
        Omit<PopupProps, keyof IDefaultProps<Result> | "afterClose"> {
    /**
     * 点击蒙层是否关闭
     *
     * @default true
     */
    closeOnMaskClick?: boolean
}

/** 弹出层 */
export const Popup = memo(function Popup (props: IPopupProps) {

    const { closeOnMaskClick = true, onClose, onClosed, ...popupProps } = props

    /** STATE: 结果对象 */
    const [result, setResult] = useImmer<IDefaultResult>({
        actionType: "close"
    })

    /** HOOKS: 使用异步任务执行器 */
    const { loadStatus, run } = useAsyncTask()

    /** FUN: 关闭 */
    const close = useCallback(
        (newResult: IDefaultResult = { actionType: "close" }) => {

            // 如果正在加载中，则不允许关闭
            if (loadStatus === "loading") {

                console.warn("正在执行中，无法关闭")
                return

            }

            run(async () => {

                setResult(newResult)
                await onClose?.(newResult)

            }, "操作失败")

        },
        [loadStatus, onClose, run, setResult]
    )

    /** MEMO: 传递给子孙组件的上下文值 */
    const contextValue = useMemo<IContext<IDefaultResult>>(
        () => ({
            loadStatus,
            result,
            close
        }),
        [loadStatus, result, close]
    )

    return (
        <Provider value={contextValue}>
            <AntdPopup
                {...popupProps}
                closeOnMaskClick={closeOnMaskClick}
                onClose={() => close()}
                afterClose={() => {

                    onClosed?.(result)

                }}
            />
        </Provider>
    )

})
