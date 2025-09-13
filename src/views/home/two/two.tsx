/*
 * @Author: dyb-dev
 * @Date: 2025-09-11 03:17:20
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 14:37:01
 * @FilePath: /react-web-template/src/views/home/two/two.tsx
 * @Description: two 子路由
 */

import { Button } from "antd-mobile/2x"
import { memo } from "react"
import { useOutletContext } from "react-router-dom"

import { useNavigate } from "@/hooks"

import styles from "./two.module.scss"

export default memo(function Two () {

    /** HOOKS: 使用导航 */
    const { back } = useNavigate()

    /** HOOKS: 使用 OutletContext 获取父级路由传递的 context */
    const context = useOutletContext<{ value: string }>()
    console.log("two 页面 父级路由传递的 context:", context)

    return (
        <div className={styles["two"]}>
            <div className={styles["two__title"]}>two 子路由</div>

            <Button
                color="primary"
                size="large"
                onClick={() => {

                    back()

                }}
            >
                返回 index 子路由
            </Button>
        </div>
    )

})
