/*
 * @Author: dyb-dev
 * @Date: 2025-02-22 14:05:37
 * @LastEditors: v_zhgtzhong
 * @LastEditTime: 2025-08-01 10:27:03
 * @FilePath: /react-web-template/src/components/Cube/Cube.tsx
 * @Description: 立方体组件
 */

import classNames from "classnames"
import { memo } from "react"
import { useImmer } from "use-immer"

import { toAssetsAbsoluteUrl } from "@/utils"

import "./Cube.scss"

export const Cube = memo(function Cube() {

    /** REF: 大立方体数据列表 */
    const largeCubeFaces = [
        { className: "front", imgSrc: "/image/Cube/cube_img1.jpg" },
        { className: "back", imgSrc: "/image/Cube/cube_img7.jpg" },
        { className: "left", imgSrc: "/image/Cube/cube_img2.jpg" },
        { className: "right", imgSrc: "/image/Cube/cube_img3.jpg" },
        { className: "top", imgSrc: "/image/Cube/cube_img8.jpg" },
        { className: "bottom", imgSrc: "/image/Cube/cube_img11.jpg" }
    ]

    /** REF: 小立方体数据列表 */
    const smallCubeFaces = [
        { className: "front", imgSrc: "/image/Cube/cube_img10.jpg" },
        { className: "back", imgSrc: "/image/Cube/cube_img5.jpg" },
        { className: "left", imgSrc: "/image/Cube/cube_img9.jpg" },
        { className: "right", imgSrc: "/image/Cube/cube_img4.jpg" },
        { className: "top", imgSrc: "/image/Cube/cube_img6.jpg" },
        { className: "bottom", imgSrc: "/image/Cube/cube_img12.jpg" }
    ]

    const [isActive, setIsActive] = useImmer(false)

    return (
        <div className="cube">
            <div
                className={classNames("cube__box", {
                    "cube__box--active": isActive
                })}
                onClick={() => setIsActive(!isActive)}
            >
                {largeCubeFaces.map((face, index) =>
                    <div key={index} className={classNames("cube__box__max", `cube__box__max__${face.className}`)}>
                        <img className="img" src={toAssetsAbsoluteUrl(face.imgSrc)} alt="" />
                    </div>
                )}

                {smallCubeFaces.map((face, index) =>
                    <div key={index} className={classNames("cube__box__min", `cube__box__min__${face.className}`)}>
                        <img className="img" src={toAssetsAbsoluteUrl(face.imgSrc)} alt="" />
                    </div>
                )}
            </div>
        </div>
    )

})
