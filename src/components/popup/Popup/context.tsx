/*
 * @Author: dyb-dev
 * @Date: 2025-09-13 14:24:03
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 17:28:20
 * @FilePath: /react-web-template/src/components/popup/Popup/context.tsx
 * @Description: 弹出层上下文
 */

import { createContext, useContext } from "react"

import type { TLoadStatus } from "@/hooks"
import type { IBaseResult, IDefaultResult } from "@/utils"

/** 弹出层上下文 */
export interface IContext<Result extends IBaseResult = IDefaultResult> {
    /** 加载状态 */
    loadStatus: TLoadStatus
    /** 结果对象 */
    result: Result
    /**
     * 关闭弹出层
     *
     * @param {Result} [result] 结果对象 默认: { actionType: "close" }
     */
    close: (result?: Result) => void
}

/** CONST: 弹出层上下文 */
const Context = createContext<IContext | null>(null)

/** CONST: 弹出层上下文提供者 */
export const Provider = Context.Provider

/**
 * HOOKS: 使用弹出层上下文
 *
 * @author dyb-dev
 * @date 2025-09-11 20:05:39
 * @returns {*}  {IContext} 弹出层上下文
 */
export const usePopup = <Result extends IBaseResult = IDefaultResult>(): IContext<Result> => {

    /** HOOKS: 使用上下文 */
    const context = useContext(Context) as unknown as IContext<Result>

    if (!context) {

        throw new Error("usePopup 必须在 Provider 内部使用")

    }

    return context

}
