/*
 * @Author: dyb-dev
 * @Date: 2025-09-13 14:24:03
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 14:25:42
 * @FilePath: /react-web-template/src/components/popup/Popup/index.ts
 * @Description: 弹出层
 */

/** 导出 `弹出层` */
export * from "./Popup"

/** 导出 `弹出层` 上下文 */
export * from "./context"

import { mountComponent } from "@/utils"

import { Popup } from "./Popup"

import type { IPopupProps } from "./Popup"
import type { IBaseResult, IDefaultResult, TExcludeVisible, TOnCloseReturnsBoolean } from "@/utils"

/** 显示 `弹出层` 选项 */
export type TShowPopupOptions<Result extends IBaseResult = IDefaultResult> = TExcludeVisible<
    TOnCloseReturnsBoolean<IPopupProps<Result>>
>

/**
 * FUN: 显示 `弹出层`
 *
 * @author dyb-dev
 * @date 2025-09-12 17:59:36
 * @template Result
 * @param {TShowPopupOptions<Result>} options 选项
 * @returns {*}  {Promise<Result>} 结果对象
 */
export const showPopup = <Result extends IBaseResult = IDefaultResult>(options: TShowPopupOptions<Result>): Promise<Result> => {

    return mountComponent<Result, TShowPopupOptions<Result>>(Popup, {
        ...options
    })

}
