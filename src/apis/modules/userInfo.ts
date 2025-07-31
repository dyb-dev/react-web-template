/*
 * @Author: dyb-dev
 * @Date: 2025-02-11 23:47:17
 * @LastEditors: v_zhgtzhong
 * @LastEditTime: 2025-08-01 00:40:21
 * @FilePath: /react-web-template/src/apis/modules/userInfo.ts
 * @Description: 用户信息相关接口
 */

import { sendRequest } from "../request"

import type { AxiosResponse } from "axios"

/** 登录 参数 */
export interface ILoginApiParams {
    /** 用户手机号 */
    phoneNumber: string
    /** 用户密码 */
    password: string
}

/** 登录 结果数据 */
export interface ILoginApiResultData {
    /** 昵称 */
    nickName: string
    /** 绑定手机号 */
    phoneNumber: string
}

/** CONST: 登录 API URL TODO: 接口地址修改 */
export const LOGIN_API_URL = ""

/**
 * FUN: 登录
 *
 * @author dyb-dev
 * @date 21/02/2025/  14:08:17
 * @param {ILoginApiParams} params 参数
 * @param {TModifyProperties<ITestRequestConfig<ILoginApiResultData>, "test">} [testRequestConfig] 测试请求配置
 * @param {typeof LOGIN_API_URL} [url] 路径
 * @returns {*}  {Promise<AxiosResponse<ILoginApiResultData>>} 结果数据
 */
export const loginApi = (
    params: ILoginApiParams,
    testRequestConfig?: TModifyProperties<ITestRequestConfig<ILoginApiResultData>, "test">,
    url: typeof LOGIN_API_URL = LOGIN_API_URL
): Promise<AxiosResponse<ILoginApiResultData>> => {

    return sendRequest({
        url,
        params,
        testRequestConfig
    })

}

/** CONST: 检查登录URL TODO: 接口地址修改 */
export const CHECK_LOGIN_API_URL = "/checkLogin"

/**
 * FUN: 检查登录状态
 *
 * @author dyb-dev
 * @date 21/02/2025/  14:08:51
 * @param {TModifyProperties<ITestRequestConfig, "test">} [testRequestConfig] 测试请求配置
 * @param {typeof CHECK_LOGIN_API_URL} [url] 路径
 * @returns {*}  {Promise<AxiosResponse>} 结果数据
 */
export const checkLoginApi = (
    testRequestConfig?: TModifyProperties<ITestRequestConfig, "test">,
    url: typeof CHECK_LOGIN_API_URL = CHECK_LOGIN_API_URL
): Promise<AxiosResponse> => {

    return sendRequest({
        url,
        testRequestConfig
    })

}

/** CONST: 登出URL TODO: 接口地址修改 */
export const LOGOUT_API_URL = "/logout"

/**
 * FUN: 登出
 *
 * @author dyb-dev
 * @date 21/02/2025/  14:09:06
 * @param {TModifyProperties<ITestRequestConfig, "test">} [testRequestConfig] 测试请求配置
 * @param {typeof LOGOUT_API_URL} [url] 路径
 * @returns {*}  {Promise<AxiosResponse>} 结果数据
 */
export const logoutApi = (
    testRequestConfig?: TModifyProperties<ITestRequestConfig, "test">,
    url: typeof LOGOUT_API_URL = LOGOUT_API_URL
): Promise<AxiosResponse> => {

    return sendRequest({
        url,
        testRequestConfig
    })

}
