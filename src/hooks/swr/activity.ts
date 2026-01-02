/*
 * @FileDesc: 本次活动swr相关hooks函数
 */

import useSWR from "swr"

import { GET_ID_API_URL, GET_USER_INFO_API_URL, getIdApi, getUserInfoApi } from "@/apis"

import type { IGetIdApiParams, IGetIdApiResultData, IGetUserInfoApiResultData } from "@/apis"
import type { AxiosResponse } from "axios"

/**
 * HOOKS: 使用获取用户信息
 *
 * @author dyb-dev
 * @date 28/04/2025/  00:13:52
 * @returns {*} 返回结果
 */
export const useGetUserInfo = () => {

    const { data: result, ...other } = useSWR<
        AxiosResponse<IGetUserInfoApiResultData>,
        AxiosResponse<IGetUserInfoApiResultData>,
        typeof GET_USER_INFO_API_URL
    >(GET_USER_INFO_API_URL, async GET_USER_INFO_API_URL => {

        const _result = await getUserInfoApi(
            {
                testResult: {
                    success: true,
                    message: "获取用户信息成功",
                    data: {
                        body: "",
                        id: 1,
                        title: "",
                        userId: 1
                    }
                }
            },
            GET_USER_INFO_API_URL
        )

        // 请求失败时，直接报错，启动 `useSWR` 的自动重试请求机制
        if (!_result.success) {

            throw _result

        }
        return _result

    })

    return {
        result,
        ...other
    }

}

/**
 * HOOKS: 使用获取ID
 *
 * @author dyb-dev
 * @date 28/04/2025/  00:10:01
 * @param {IGetIdApiParams} params 获取ID参数
 * @returns {*} 返回结果
 */
export const useGetId = (params: IGetIdApiParams) => {

    const { data: result, ...other } = useSWR<
        AxiosResponse<IGetIdApiResultData>,
        AxiosResponse<IGetIdApiResultData>,
        [typeof GET_ID_API_URL, IGetIdApiParams]
    >([GET_ID_API_URL, params], async ([GET_ID_API_URL, params]) => {

        const _result = await getIdApi(
            params,
            {
                testResult: {
                    success: true,
                    message: "获取id成功",
                    data: {
                        id: 2
                    }
                }
            },
            GET_ID_API_URL
        )

        // 请求失败时，直接报错，启动 `useSWR` 的自动重试请求机制
        if (!_result.success) {

            throw _result

        }
        return _result

    })

    return {
        result,
        ...other
    }

}
