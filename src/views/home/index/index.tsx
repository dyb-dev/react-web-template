/*
 * @Author: dyb-dev
 * @Date: 2025-09-11 03:17:16
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 14:37:19
 * @FilePath: /react-web-template/src/views/home/index/index.tsx
 * @Description: index 子路由
 */

import { Button } from "antd-mobile/2x"
import { memo } from "react"
import { useOutletContext } from "react-router-dom"

import { useNavigate } from "@/hooks"

import styles from "./index.module.scss"

export default memo(function Index () {

    /** HOOKS: 使用导航 */
    const { navigate } = useNavigate()

    /** HOOKS: 使用 OutletContext 获取父级路由传递的 context */
    const context = useOutletContext<{ value: string }>()
    console.log("index 页面 父级路由传递的 context:", context)

    return (
        <div className={styles["index"]}>
            <div className={styles["index__title"]}>index 子路由</div>

            <Button
                color="primary"
                size="large"
                onClick={() => {

                    navigate("./two")

                }}
            >
                前往 two 子路由
            </Button>
        </div>
    )

})
