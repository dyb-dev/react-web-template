/*
 * @FileDesc: 弹出层上下文
 */

import { createContext, useContext } from "react"

import type { IBaseResult, IDefaultContext, IDefaultResult } from "@/utils"

/** CONST: 弹出层上下文 */
const Context = createContext<IDefaultContext | null>(null)

/** CONST: 弹出层上下文提供者 */
export const PopupProvider = Context.Provider

/**
 * HOOKS: 使用弹出层上下文
 *
 * @author dyb-dev
 * @date 2025-09-11 20:05:39
 * @returns {*}  {IContext} 弹出层上下文
 */
export const usePopupContext = <Result extends IBaseResult = IDefaultResult>(): IDefaultContext<Result> => {

    /** HOOKS: 使用上下文 */
    const context = useContext(Context) as unknown as IDefaultContext<Result>

    if (!context) {

        throw new Error("usePopupContext 必须在 Provider 内部使用")

    }

    return context

}
