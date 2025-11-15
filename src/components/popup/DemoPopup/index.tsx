/*
 * @FileDesc: Demo 弹出层
 */

import { showPopup } from "@/components"

import { Children } from "./Children/Children"

import type { IChildrenProps } from "./Children/Children"
import type { TShowPopupOptions } from "@/components"
import type { TDefaultActionType, TExcludeChildren } from "@/utils"

/** 显示 `Demo 弹出层` 选项 */
export interface IShowDemoPopupOptions extends TExcludeChildren<TShowPopupOptions<IShowDemoPopupResult>> {
    /** 子组件 Props */
    children: IChildrenProps
}

/** 显示 `Demo 弹出层` 结果对象 */
export interface IShowDemoPopupResult {
    /** 动作类型 */
    actionType: TDefaultActionType | "cancel" | "confirm"
    /** 数据 */
    data: string
}

/**
 * FUN: 显示 `Demo 弹出层`
 *
 * @author dyb-dev
 * @date 2025-09-12 18:09:27
 * @param {IShowDemoPopupOptions} options 选项
 * @returns {*}  {Promise<IShowDemoPopupResult>} 结果对象
 */
export const showDemoPopup = (options: IShowDemoPopupOptions): Promise<IShowDemoPopupResult> => {

    const { children, ...popupOptions } = options

    return showPopup<IShowDemoPopupResult>({
        ...popupOptions,
        children: <Children {...children} />
    })

}
