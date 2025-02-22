/*
 * @Author: dyb-dev
 * @Date: 2025-02-22 15:10:22
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-02-22 15:12:07
 * @FilePath: /react-web-template/src/stores/activity.ts
 * @Description: 当前活动状态管理
 */

// import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware"
import { subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { createWithEqualityFn } from "zustand/traditional"
import { shallow } from "zustand/vanilla/shallow"

/** Store 状态 */
interface IActivityStoreState {
    /** 数量 */
    count: number
}

/** Store 动作 */
interface IActivityStoreAction {}

/** Store 实例 */
const useActivityStore = createWithEqualityFn<IActivityStoreState & IActivityStoreAction>()(
    // 允许订阅指定状态中间件
    subscribeWithSelector(
        // 允许持久化储存中间件
        // persist(
        // 允许将不可变对象写法改为可变对象写法中间件
        immer(() => ({
            // #region CODE: 状态

            count: 0

            // #endregion

            // #region CODE: 动作

            // #endregion
        }))
        // {
        //     // 设置持久化储存的 key
        //     name: "ActivityStore",
        //     // 设置持久化储存的存储方式
        //     storage: createJSONStorage(() => localStorage),
        //     // 设置需要持久化的状态
        //     partialize: state => ({ nickName: state.nickName })
        // }
        // )
    ),
    shallow
)

export type { IActivityStoreState, IActivityStoreAction }

export { useActivityStore }
