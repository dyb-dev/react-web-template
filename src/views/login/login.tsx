/*
 * @FileDesc: 登录页面
 */

import { Button, Form, Input } from "antd-mobile/2x"
import { memo, useCallback } from "react"
import { useImmer } from "use-immer"

import { useNavigate } from "@/hooks"
import { useUserInfoStore } from "@/stores"
import { getCurrentUrlQuery, isDevEnv, isPhoneNumber } from "@/utils"

import styles from "./login.module.scss"

/** 查询参数 */
interface ISearchParams {
    /** 重定向路由 默认: 首页路由 */
    redirectRoute?: string
    /** 其他相关参数 */
    [key: string]: any
}

/** 表单数据类型 */
interface IFormData {
    /** 手机号 */
    phoneNumber: string
    /** 密码 */
    password: string
}

export default memo(function Login () {

    // 用于导航
    const { navigate, back } = useNavigate()
    // 登录方法
    const login = useUserInfoStore(({ login }) => login)
    // 存储表单数据
    const [formData, setFormData] = useImmer<IFormData>({
        phoneNumber: "",
        password: ""
    })

    /** FUN: 验证表单数据 */
    const validateForm = useCallback(() => {

        if (!formData.phoneNumber) {

            // Toast.show("请输入手机号")
            console.error("请输入手机号")
            return false

        }

        if (!isPhoneNumber(formData.phoneNumber)) {

            // Toast.show("请输入正确的手机号")
            console.error("请输入正确的手机号")
            return false

        }

        if (!formData.password) {

            // Toast.show("请输入密码")
            console.error("请输入密码")
            return false

        }
        return true

    }, [formData])

    /** EVENT: 点击登录按钮 */
    const onClickLoginButton = useCallback(async () => {

        // 校验表单是否通过
        if (!isDevEnv() && !validateForm()) {

            return

        }

        // 登录
        const _loginResult = await login({
            phoneNumber: formData.phoneNumber,
            password: formData.password
        })

        // 如果登录失败
        if (!_loginResult.success) {

            // Toast.show(_loginResult.message || "登录失败, 请稍后重试")
            console.error("登录失败, 请稍后重试")
            return

        }

        // 获取当前路由参数
        const { redirectRoute = __PROJECT_INFO__.env.VITE_HOME_ROUTE, ...otherParams } = (getCurrentUrlQuery() ??
            {}) as ISearchParams

        navigate({
            path: redirectRoute,
            query: otherParams,
            replace: true
        })

    }, [login, navigate, formData, validateForm])

    return (
        <section className={styles["login"]}>
            <Form className={styles["login__form"]} layout="horizontal">
                <Form.Item label="手机号" name="username">
                    <Input
                        type="tel"
                        value={formData.phoneNumber}
                        placeholder="请输入手机号"
                        clearable
                        onChange={val =>
                            setFormData(draft => {

                                draft.phoneNumber = val

                            })
                        }
                    />
                </Form.Item>

                <Form.Item label="密码" name="password">
                    <Input
                        type="password"
                        placeholder="请输入密码"
                        clearable
                        onChange={val =>
                            setFormData(draft => {

                                draft.password = val

                            })
                        }
                    />
                </Form.Item>
            </Form>

            <Button
                className={styles["login__button"]}
                shape="rounded"
                color="primary"
                size="large"
                block
                loading="auto"
                onClick={onClickLoginButton}
            >
                登录
            </Button>

            <Button
                className={styles["login__button"]}
                shape="rounded"
                color="primary"
                size="large"
                fill="outline"
                block
                onClick={() => {

                    back()

                }}
            >
                返回
            </Button>
        </section>
    )

})
