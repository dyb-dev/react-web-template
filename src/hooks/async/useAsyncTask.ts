/*
 * @FileDesc: 使用异步任务执行器
 */

import { Toast } from "antd-mobile/2x"
import { useCallback } from "react"
import { useImmer } from "use-immer"

/** 加载状态类型 */
export type TLoadStatus = "loading" | "success" | "fail"

/** 使用异步任务执行器 返回值 */
export interface IUseAsyncTaskReturn {
    /**
     * 加载状态
     *
     * @default 'success'
     */
    loadStatus: TLoadStatus
    /** 执行异步任务 */
    run: <T = void>(task: () => T | Promise<T>, errorMessage?: string, successMessage?: string) => Promise<T | void>
}

/**
 * HOOKS: 使用异步任务执行器
 *
 * @author dyb-dev
 * @date 2025-07-29 16:15:35
 * @returns {*}  {IUseAsyncTaskReturn} 返回值
 */
export const useAsyncTask = (): IUseAsyncTaskReturn => {

    /**
     * HOOKS: 使用 加载状态
     *
     * @default 'success'
     */
    const [loadStatus, setLoadStatus] = useImmer<IUseAsyncTaskReturn["loadStatus"]>("success")

    /**
     * FUN: 执行异步任务
     *
     * @author dyb-dev
     * @date 2025-07-29 16:15:35
     * @param {*} task 异步任务
     * @param {string} [failMessage="加载失败"] 失败提示信息
     * @param {string} [successMessage=""] 成功提示信息
     * @returns {*} 返回任务结果
     */
    const run = useCallback<IUseAsyncTaskReturn["run"]>(
        async (task, failMessage = "加载失败", successMessage = "") => {

            try {

                setLoadStatus("loading")

                const _result = await task()

                setLoadStatus("success")

                successMessage &&
                    Toast.show({
                        content: successMessage,
                        duration: 3000
                    })

                return _result

            }
            catch (error) {

                setLoadStatus("fail")
                const _error = error as Error
                Toast.show({
                    content: _error?.message || failMessage,
                    duration: 3000
                })

            }

        },
        [setLoadStatus]
    )

    return {
        loadStatus,
        run
    }

}
