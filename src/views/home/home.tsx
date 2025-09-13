/*
 * @Author: dyb-dev
 * @Date: 2025-09-13 00:44:01
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 14:36:32
 * @FilePath: /react-web-template/src/views/home/home.tsx
 * @Description: 首页
 */

import { Button } from "antd-mobile/2x"
import { memo } from "react"
import { Outlet } from "react-router-dom"

import react from "@/assets/image/logo/react.svg"
import vite from "@/assets/image/logo/vite.svg"
import { useNavigate, useRoute } from "@/hooks"

import styles from "./home.module.scss"

export default memo(function Home () {

    const { navigate } = useNavigate()

    /** HOOKS: 使用路由 */
    const currentRoute = useRoute()
    console.log("当前路由信息:", currentRoute)

    /** CONST: 传递给子路由的 context */
    const context = {
        value: "这是来自 home 路由的 context, 可以在子路由中获取"
    }

    return (
        <section className={styles["home"]}>
            <div className={styles["home__logo-box"]}>
                <a href="https://zh-hans.react.dev/" target="_blank" rel="noreferrer">
                    <img
                        className={`${styles["home__logo-box__item"]} ${styles["home__logo-box__item-react"]}`}
                        src={react}
                        alt=""
                    />
                </a>

                <a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">
                    <img
                        className={`${styles["home__logo-box__item"]} ${styles["home__logo-box__item-vite"]}`}
                        src={vite}
                        alt=""
                    />
                </a>
            </div>

            <Button
                className={styles["home__button"]}
                block
                color="primary"
                size="large"
                onClick={async () => {

                    navigate({
                        path: "/test"
                    })

                }}
            >
                前往测试页面
            </Button>

            <div className={styles["home__outlet"]}>
                {/* 子路由视图 */}
                <Outlet context={context}></Outlet>
            </div>
        </section>
    )

})
