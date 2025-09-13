/*
 * @Author: dyb-dev
 * @Date: 2025-09-12 19:39:14
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 14:21:32
 * @FilePath: /react-web-template/src/utils/component/index.tsx
 * @Description: 组件相关工具函数
 */

import { useEffect } from "react"
import { createRoot } from "react-dom/client"
import { useImmer } from "use-immer"

import type { ComponentType, ReactNode } from "react"

/**
 * 基础结果对象
 * - 可用于自定义结果对象继承
 */
export interface IBaseResult<ActionType extends string = string> {
    /** 动作类型 */
    actionType: ActionType
}

/** 默认操作类型 */
export type TDefaultActionType = "close"

/** 默认结果对象 */
export interface IDefaultResult extends IBaseResult<TDefaultActionType> {}

/** 默认 Props */
export interface IDefaultProps<Result extends IBaseResult = IDefaultResult> {
    /** 是否显示 */
    visible: boolean
    /** 子组件 */
    children: ReactNode
    /** 监听关闭 */
    onClose?: (result: Result) => void | Promise<void>
    /** 监听关闭完成 */
    onClosed?: (result: Result) => void | Promise<void>
}

/**
 * onClose 返回 boolean 类型
 *
 * @template Props - 传入的 Props
 */
export type TOnCloseReturnsBoolean<Props extends Record<string, any>> = {
    [Key in keyof Props]: Key extends "onClose"
        ? Props[Key] extends ((...args: infer Args) => void | Promise<void>) | void
            ? (...args: Args) => boolean | Promise<boolean>
            : Props[Key]
        : Props[Key]
}

/**
 * 排除 visible 属性
 *
 * @template Props - 传入的 Props
 */
export type TExcludeVisible<Props extends Record<string, any>> = Omit<Props, "visible">

/**
 * 移除 children 属性
 * - 可用于需要排除子内容相关属性的场景
 *
 * @template Props - 传入的 Props
 */
export type TExcludeChildren<Props extends Record<string, any>> = Omit<Props, "children">

/**
 * FUN: 挂载组件
 *
 * @author dyb-dev
 * @date 2025-09-12 17:56:18
 * @template Result
 * @template Props
 * @param {ComponentType<any>} component 组件
 * @param {Props} [props] 组件 Props
 * @returns {*}  {Promise<Result>} 结果对象
 */
export const mountComponent = <
    Result extends IBaseResult = IDefaultResult,
    Props extends TExcludeVisible<TOnCloseReturnsBoolean<IDefaultProps<Result>>> = TExcludeVisible<
        TOnCloseReturnsBoolean<IDefaultProps<Result>>
    >
>(
        component: ComponentType<any>,
        props?: Props
    ): Promise<Result> => {

    return new Promise(resolve => {

        const mountNode = document.createElement("div")
        const rootNode = document.body
        rootNode.appendChild(mountNode)
        const root = createRoot(mountNode)

        const Wrapper = () => {

            /** STATE: 是否显示 */
            const [visible, setVisible] = useImmer(false)

            /** EFFECT: 组件挂载完毕，确保 CSS 动画的初始状态能被正确应用  */
            useEffect(() => {

                setVisible(true)

            }, [setVisible])

            /** 组件 */
            const Component = component

            /** 组件 Props */
            const componentProps = {
                ...props,
                visible,
                onClose: async (result: Result) => {

                    /** 是否关闭 */
                    let _isClose = true

                    // 如果传入了 onClose 回调，则由使用者决定是否关闭
                    if (typeof props?.onClose === "function") {

                        _isClose = !!await props.onClose(result)

                    }

                    _isClose && setVisible(false)

                },
                onClosed: (result: Result) => {

                    // 避免组件渲染、卸载并发进行
                    requestAnimationFrame(() => {

                        root.unmount()
                        rootNode.removeChild(mountNode)
                        props?.onClosed?.(result)
                        resolve(result)

                    })

                }
            }

            return <Component {...componentProps} />

        }

        root.render(<Wrapper />)

    })

}
