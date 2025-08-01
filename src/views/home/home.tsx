/*
 * @Author: dyb-dev
 * @Date: 2025-02-12 15:12:29
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-02-24 15:02:20
 * @FilePath: /react-web-template/src/views/home/home.tsx
 * @Description: 首页
 */

import { Button } from "antd-mobile/2x"
import { memo } from "react"

import react from "@/assets/image/logo/react.svg"
import vite from "@/assets/image/logo/vite.svg"
import { Cube } from "@/components"
import { useNavigate } from "@/hooks"

import "./home.scss"

export default memo(function Home() {

    const { navigate } = useNavigate()

    return (
        <section className="home">
            <div className="home__logo-box">
                <a href="https://zh-hans.react.dev/" target="_blank" rel="noreferrer">
                    <img className="home__logo-box__item home__logo-box__item-react" src={react} alt="" />
                </a>

                <a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">
                    <img className="home__logo-box__item home__logo-box__item-vite" src={vite} alt="" />
                </a>
            </div>

            <Button
                className="home__button"
                block
                color="primary"
                size="large"
                onClick={() => {

                    navigate({
                        path: "/test",
                        query: {
                            test: "test"
                        }
                    })

                }}
            >
                前往测试页面
            </Button>

            <Cube />
        </section>
    )

})
