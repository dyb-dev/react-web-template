/*
 * @Author: dyb-dev
 * @Date: 2025-02-16 22:52:14
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-02-22 17:44:06
 * @FilePath: /react-web-template/src/views/test/test.tsx
 * @Description: 登录页面
 */

import { Button } from "antd-mobile/2x"
import { memo } from "react"

import { useNavigate } from "@/hooks"
import { getCurrentUrlQuery } from "@/utils"

import "./test.scss"

/** 查询参数 */
interface ISearchParams {
    /** 测试参数 */
    test: string
}

export default memo(() => {

    const { back } = useNavigate()

    console.log("测试页面", getCurrentUrlQuery() as unknown as ISearchParams)

    return (
        <section className="test">
            <Button
                className="test__button"
                block
                color="primary"
                size="large"
                onClick={() => {

                    back()

                }}
            >
                返回
            </Button>
        </section>
    )

})
