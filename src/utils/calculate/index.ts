/*
 * @Author: dyb-dev
 * @Date: 2025-02-11 23:45:05
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-02-22 15:16:33
 * @FilePath: /react-web-template/src/utils/calculate/index.ts
 * @Description: 计算相关工具函数
 */

/**
 * FUN: 计算 px 转 vw
 *
 * @author dyb-dev
 * @date 16/10/2024/  14:23:35
 * @param {(string | number)} px - px 值
 * @param {number} [baseWidth=750] - 设计稿宽度
 * @param {number} [decimalPlaces=3] - 保留的小数位数
 * @returns {*}  {string} 转换后的 vw 值
 */
const pxToVw = (px: string | number, baseWidth: number = 750, decimalPlaces: number = 3): string => {

    // 解析字符串，将其转换为数字
    const _numericPX = typeof px === "string" ? parseFloat(px) : px

    // 处理无效的数值输入
    if (isNaN(_numericPX)) {

        console.error("pxToVw() px 参数无效 px:", px)
        return "0vw"

    }

    // 转换 px 为 vw，并保留指定的小数位数
    return (_numericPX / baseWidth * 100).toFixed(decimalPlaces) + "vw"

}

export { pxToVw }
