/*
 * @Author: dyb-dev
 * @Date: 2025-07-26 13:27:22
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-26 13:27:32
 * @FilePath: /react-web-template/src/stores/theme.ts
 * @Description: 主题状态管理
 */

// import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware"
import { subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { createWithEqualityFn } from "zustand/traditional"
import { shallow } from "zustand/vanilla/shallow"

/** 主题枚举 */
export const enum ETheme {
    /** 浅色主题 */
    Light = "light",
    /** 深色主题 */
    Dark = "dark"
}

/** CONST: 深色主题类名 */
const THEME_DARK_CLASS_NAME = "theme-dark"

/** Store 状态 */
export interface IThemeStoreState {
    /** 当前主题 */
    theme: ETheme
}

/** Store 动作 */
export interface IThemeStoreAction {
    /** 更新主题 */
    updateTheme: (theme: ETheme) => void
}

/** Store 实例 */
export const useThemeStore = createWithEqualityFn<IThemeStoreState & IThemeStoreAction>()(
    // 允许订阅指定状态中间件
    subscribeWithSelector(
        // 允许持久化储存中间件
        // persist(
        // 允许将不可变对象写法改为可变对象写法中间件
        immer(set => ({
            // #region CODE: 状态

            theme: ETheme.Light,

            // #endregion

            // #region CODE: 动作

            updateTheme: theme => {

                // 文档根元素的类列表
                document.documentElement.classList.toggle(THEME_DARK_CLASS_NAME, theme === ETheme.Dark)

                set(state => {

                    state.theme = theme

                })

            }

            // #endregion
        }))
        // {
        //     // 设置持久化储存的 key
        //     name: "ThemeStore",
        //     // 设置持久化储存的存储方式
        //     storage: createJSONStorage(() => localStorage),
        //     // 设置需要持久化的状态
        //     partialize: state => ({ nickName: state.nickName })
        // }
        // )
    ),
    shallow
)
