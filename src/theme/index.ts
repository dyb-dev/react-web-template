/*
 * @Author: dyb-dev
 * @Date: 2025-02-20 12:50:42
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-20 13:09:18
 * @FilePath: /react-web-template/src/theme/index.ts
 * @Description: 主题模块
 */

/** 主题枚举 */
enum ETheme {
    Light = "light",
    Dark = "dark"
}

/** LET: 主题 */
let theme: ETheme = ETheme.Light

/** LET: 是否初始化主题 */
let isSetupTheme: boolean = false

/**
 * FUN: 初始化主题
 *
 * @author dyb-dev
 * @date 20/02/2025/  13:36:15
 */
const setupTheme = () => {

    if (isSetupTheme) {

        return

    }

    isSetupTheme = true

    /** 系统暗黑主题查询 */
    const _darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    updateTheme(_darkModeMediaQuery.matches)

    // 监听系统主题变化
    _darkModeMediaQuery.addEventListener("change", event => {

        updateTheme(event.matches)

    })

}

/** CONST: 深色主题类名 */
const THEME_DARK_CLASS_NAME = "theme-dark"

/**
 * FUN: 更新主题
 *
 * @author dyb-dev
 * @date 20/02/2025/  13:39:07
 * @param {boolean} isMatchesDark 是否匹配暗黑主题
 */
const updateTheme = (isMatchesDark: boolean) => {

    theme = isMatchesDark ? ETheme.Dark : ETheme.Light

    document.documentElement.classList.toggle(THEME_DARK_CLASS_NAME, isMatchesDark)

}

export { ETheme, theme, THEME_DARK_CLASS_NAME, setupTheme, updateTheme }
