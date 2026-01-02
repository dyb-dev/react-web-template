/*
 * @FileDesc: 用户信息状态管理
 */

// import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware"
import { subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { createWithEqualityFn } from "zustand/traditional"
import { shallow } from "zustand/vanilla/shallow"

import { checkLoginApi, loginApi, logoutApi } from "@/apis"

import type { ILoginApiParams, ILoginApiResultData } from "@/apis"
import type { AxiosResponse } from "axios"

/** Store 状态 */
export interface IUserInfoStoreState {
    /** 是否登录成功 */
    isLogin: boolean
    /** 是否已检查登录 */
    isCheckedLogin: boolean
    /** 用户昵称 */
    nickName: string
    /** 用户手机号 */
    phoneNumber: string
}

/** Store 动作 */
export interface IUserInfoStoreAction {
    /** 登录 */
    login: (params: ILoginApiParams) => Promise<AxiosResponse<ILoginApiResultData>>
    /** 检查登录 */
    checkLogin: () => Promise<boolean>
    /** 登出 */
    logout: () => Promise<AxiosResponse>
}

/** Store 实例 */
export const useUserInfoStore = createWithEqualityFn<IUserInfoStoreState & IUserInfoStoreAction>()(
    // 允许订阅指定状态中间件
    subscribeWithSelector(
        // 允许持久化储存中间件
        // persist(
        // 允许将不可变对象写法改为可变对象写法中间件
        immer((set, get) => ({
            // #region CODE: 状态

            isLogin: false,
            isCheckedLogin: false,
            nickName: "",
            phoneNumber: "",

            // #endregion

            // #region CODE: 动作

            login: async params => {

                const _loginApiResult = await loginApi(params, {
                    testResult: {
                        success: true,
                        message: "登录成功",
                        data: {
                            nickName: "是对的",
                            phoneNumber: "111111111"
                        }
                    }
                })

                if (_loginApiResult.success) {

                    const {
                        data: { nickName = "", phoneNumber = "" }
                    } = _loginApiResult

                    set(state => {

                        state.nickName = nickName
                        state.phoneNumber = phoneNumber
                        state.isLogin = true

                    })

                }
                return _loginApiResult

            },

            checkLogin: async () => {

                /** 当前状态 */
                const { isLogin } = get()

                // 如果已经登录成功，直接返回
                if (isLogin) {

                    return true

                }

                const _checkLoginApiResult = await checkLoginApi({
                    testResult: {
                        success: false,
                        message: "检查登录成功"
                    }
                })

                set(state => {

                    state.isLogin = _checkLoginApiResult.success
                    state.isCheckedLogin = true

                })

                return _checkLoginApiResult.success

            },

            logout: async () => {

                const _logoutApiResult = await logoutApi({
                    testResult: {
                        success: true,
                        message: "退出成功"
                    }
                })

                if (_logoutApiResult.success) {

                    set(state => {

                        state.isLogin = false

                    })

                }

                return _logoutApiResult

            }

            // #endregion
        }))
        // {
        //     // 设置持久化储存的 key
        //     name: "UserInfoStore",
        //     // 设置持久化储存的存储方式
        //     storage: createJSONStorage(() => localStorage),
        //     // 设置需要持久化的状态
        //     partialize: state => ({ nickName: state.nickName })
        // }
        // )
    ),
    shallow
)
