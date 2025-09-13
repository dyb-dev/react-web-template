/*
 * @Author: dyb-dev
 * @Date: 2025-09-09 01:10:27
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 17:59:24
 * @FilePath: /react-web-template/src/hooks/interaction/useDragDrop.ts
 * @Description: 使用拖拽放置
 */

import { useCallback } from "react"
import { useImmer } from "use-immer"

import type { DragEvent } from "react"

/** 使用拖拽放置 返回值 */
export interface IUseDragDropReturn {
    /** 是否拖拽中 */
    isDragging: boolean
    /** 拖拽进入回调 */
    onDragEnter: (event: DragEvent) => void
    /** 拖拽离开回调 */
    onDragLeave: (event: DragEvent) => void
    /** 拖拽放置回调 */
    onDrop: (event: DragEvent) => void
}

/**
 * HOOKS: 使用拖拽放置
 *
 * @author dyb-dev
 * @date 2025-09-09 12:41:50
 * @returns {*}  {IUseDragDropReturn} 返回值
 */
export const useDragDrop = (): IUseDragDropReturn => {

    /** STATE: 是否拖拽中 */
    const [isDragging, setIsDragging] = useImmer(false)

    /** STATE: 拖拽计数器（解决子元素触发dragleave的问题） */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setDragCounter] = useImmer(0)

    /** EVENT: 监听拖拽进入 */
    const onDragEnter = useCallback(
        (event: DragEvent) => {

            event.preventDefault()
            event.stopPropagation()

            setDragCounter(draft => {

                const _newCount = draft + 1
                // 只有当计数器从0变为1时，才表示真正的拖拽进入
                if (_newCount === 1) {

                    setIsDragging(true)

                }
                return _newCount

            })

        },
        [setDragCounter, setIsDragging]
    )

    /** EVENT: 监听拖拽离开 */
    const onDragLeave = useCallback(
        (event: DragEvent) => {

            event.preventDefault()
            event.stopPropagation()

            setDragCounter(draft => {

                const _newCount = Math.max(0, draft - 1)
                // 只有当计数器从1变为0时，才表示真正的拖拽离开
                if (_newCount === 0) {

                    setIsDragging(false)

                }
                return _newCount

            })

        },
        [setDragCounter, setIsDragging]
    )

    /** EVENT: 监听拖拽放置 */
    const onDrop = useCallback(
        (event: DragEvent) => {

            event.preventDefault()
            event.stopPropagation()

            setIsDragging(false)
            setDragCounter(0)

        },
        [setDragCounter, setIsDragging]
    )

    return {
        isDragging,
        onDragEnter,
        onDragLeave,
        onDrop
    }

}
