/*
 * @Author: dyb-dev
 * @Date: 2025-02-19 12:59:40
 * @LastEditors: v_zhgtzhong
 * @LastEditTime: 2025-08-01 10:26:49
 * @FilePath: /react-web-template/src/components/LoadBox/LoadBox.tsx
 * @Description: 加载盒子组件
 */

import { SpinLoading } from "antd-mobile/2x"
import { memo } from "react"

import "./LoadBox.scss"

export const LoadBox = memo(function LoadBox() {

    return (
        <div className="load-box">
            <SpinLoading color="primary" style={{ "--size": "24px" }} />
        </div>
    )

})
