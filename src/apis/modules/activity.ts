/*
 * @Author: dyb-dev
 * @Date: 2025-02-11 23:47:17
 * @LastEditors: v_zhgtzhong
 * @LastEditTime: 2025-08-01 00:39:52
 * @FilePath: /react-web-template/src/apis/modules/activity.ts
 * @Description: 本次活动接口模块
 */

import axios from "axios"

import { sendRequest } from "../request"

import type { AxiosResponse } from "axios"

/** 获取用户信息的结果数据 */
export interface IGetUserInfoApiResultData {
    /** 内容 */
    body: string
    /** id */
    id: number
    /** 标题 */
    title: string
    /** 用户唯一标识 */
    userId: number
}

/** CONST: 获取用户信息 API URL */
export const GET_USER_INFO_API_URL = "/1"

/**
 * FUN: 获取用户信息
 *
 * @author dyb-dev
 * @date 21/02/2025/  15:09:05
 * @param {TModifyProperties<ITestRequestConfig<IGetUserInfoApiResultData>, "test">} [testRequestConfig] 测试请求配置
 * @param {typeof GET_USER_INFO_API_URL} [url] 路径
 * @returns {*}  {Promise<AxiosResponse<IGetUserInfoApiResultData>>} 结果数据
 */
export const getUserInfoApi = async(
    testRequestConfig?: TModifyProperties<ITestRequestConfig<IGetUserInfoApiResultData>, "test">,
    url: typeof GET_USER_INFO_API_URL = GET_USER_INFO_API_URL
): Promise<AxiosResponse<IGetUserInfoApiResultData>> => {

    return sendRequest({
        url,
        requestFn: axios.get,
        testRequestConfig
    })

}

/** 获取id的参数 */
export interface IGetIdApiParams {
    /** 用户唯一标识 */
    userId: number
}

/** 获取id的结果数据 */
export interface IGetIdApiResultData {
    /** id */
    id: number
}

/** CONST: 获取ID API URL */
export const GET_ID_API_URL = ""

/**
 * FUN: 获取ID
 *
 * @author dyb-dev
 * @date 21/02/2025/  15:09:18
 * @param {IGetIdApiParams} params 参数
 * @param {TModifyProperties<ITestRequestConfig<IGetIdApiResultData>, "test">} [testRequestConfig] 测试请求配置
 * @param {typeof GET_ID_API_URL} [url] 路径
 * @returns {*}  {Promise<AxiosResponse<IGetIdApiResultData>>} 结果数据
 */
export const getIdApi = async(
    params: IGetIdApiParams,
    testRequestConfig?: TModifyProperties<ITestRequestConfig<IGetIdApiResultData>, "test">,
    url: typeof GET_ID_API_URL = GET_ID_API_URL
): Promise<AxiosResponse<IGetIdApiResultData>> => {

    return sendRequest({
        url,
        params,
        testRequestConfig
    })

}
