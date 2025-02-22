/*
 * @Author: dyb-dev
 * @Date: 2025-02-20 17:04:04
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-02-20 18:34:09
 * @FilePath: /react-web-template/src/views/not-found/not-found.tsx
 * @Description: 404页面
 */

import { ResultPage } from "antd-mobile/2x"
import { memo } from "react"
import { useNavigate } from "react-router-dom"

import "./not-found.scss"

export default memo(() => {

    const navigate = useNavigate()

    /** EVENT: 点击按钮返回上一页 */
    const goBack = () => {

        navigate(-1)

    }

    /** EVENT: 点击按钮前往首页 */
    const goToHome = () => {

        navigate(__PROJECT_INFO__.env.VITE_HOME_ROUTE, { replace: true })

    }

    return (
        <ResultPage
            className="not-found"
            status="error"
            title="页面未找到"
            description="您访问的页面不存在或已被删除"
            secondaryButtonText="返回上一页"
            onSecondaryButtonClick={goBack}
            primaryButtonText="前往首页"
            onPrimaryButtonClick={goToHome}
        />
    )

})
