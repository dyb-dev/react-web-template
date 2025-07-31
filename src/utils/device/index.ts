/*
 * @Author: dyb-dev
 * @Date: 2025-02-11 23:45:05
 * @LastEditors: v_zhgtzhong
 * @LastEditTime: 2025-08-01 00:42:49
 * @FilePath: /react-web-template/src/utils/device/index.ts
 * @Description: 设备相关工具函数
 */

/**
 * FUN: 是否是微信环境
 *
 * @author dyb-dev
 * @date 15/10/2024/  14:20:35
 * @return {*}  {boolean} 是否是微信环境
 */
export const isWx = (): boolean => /micromessenger/.test(navigator.userAgent.toLowerCase())

/**
 * FUN: 判断是否是IOS设备
 *
 * @author dyb-dev
 * @date 15/10/2024/  14:20:51
 * @return {*}  {boolean} 是否是IOS设备
 */
export const isIos = (): boolean => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

/**
 * FUN: 判断是否是Android设备
 *
 * @author dyb-dev
 * @date 15/10/2024/  14:22:30
 * @return {*}  {boolean} 是否是Android设备
 */
export const isAndroid = (): boolean => /Android/.test(navigator.userAgent)

