/*
 * @Author: dyb-dev
 * @Date: 2025-09-08 17:02:48
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 17:54:16
 * @FilePath: /react-web-template/src/components/DraggableList/DraggableList.tsx
 * @Description: 可拖拽列表组件
 */

import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core"
import { restrictToParentElement } from "@dnd-kit/modifiers"
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { memo, useCallback, useMemo } from "react"

import type { DragEndEvent } from "@dnd-kit/core"
import type { CSSProperties, ReactNode } from "react"

/** 可拖拽列表组件 默认选项 */
export interface IDraggableListItem {
    /** 唯一标识符 */
    id: string | number
}

/** 可拖拽列表组件 Props */
export interface IDraggableListProps<T extends IDraggableListItem> {
    /** 列表数据 */
    list: T[]
    /** 子组件渲染函数 */
    children: (item: T, index: number) => ReactNode
    /** 是否禁用拖拽 */
    disabled?: boolean
    /** 列表顺序变更时的回调函数 */
    onChange: (newList: T[]) => void | Promise<void>
}

/** 可拖拽列表组件 */
export const DraggableList = memo(function DraggableList<T extends IDraggableListItem> (props: IDraggableListProps<T>) {

    const { list, children, disabled = false, onChange } = props

    /** HOOKS: 使用传感器集合 */
    const sensors = useSensors(
        useSensor(PointerSensor, {
            // 拖拽激活约束
            activationConstraint: {
                // 移动距离 8px 后开始拖拽 防止覆盖直接子元素的点击事件
                distance: 8
            }
        })
    )

    /** CONST: 修饰符 */
    const modifiers = [
        // 限制拖拽区域为父元素内
        restrictToParentElement
    ]

    /** CONST: 列表项 id 数组 */
    const items = useMemo(() => list.map(item => item.id), [list])

    /** EVENT: 监听拖拽结束 */
    const onDragEnd = useCallback(
        (event: DragEndEvent) => {

            const { active, over } = event

            // 拖拽目标项不存在 或 被拖拽项未更改
            if (!over || active.id === over.id) {

                return

            }

            /** 拖拽目标项 原列表中的索引 */
            const _overIndex = list.findIndex(item => item.id === over.id)
            /** 被拖拽项 原列表中的索引 */
            const _activeIndex = list.findIndex(item => item.id === active.id)

            // 找到拖拽项和目标项，进行位置交换
            if (_overIndex !== -1 && _activeIndex !== -1) {

                // 重新排列数组顺序
                const _newList = arrayMove(list, _activeIndex, _overIndex)
                onChange(_newList)

            }

        },
        [list, onChange]
    )

    return (
        <DndContext sensors={sensors} modifiers={modifiers} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {list.map((item, index) =>
                    <SortableItem key={item.id} id={item.id} disabled={disabled}>
                        {children(item, index)}
                    </SortableItem>
                )}
            </SortableContext>
        </DndContext>
    )

}) as <T extends IDraggableListItem>(props: IDraggableListProps<T>) => JSX.Element

/** SortableItem 组件 Props */
interface ISortableItemProps {
    /** 唯一标识符 */
    id: string | number
    /** 子组件 */
    children: ReactNode
    /**
     * 是否禁用拖拽
     *
     * @default false
     */
    disabled?: boolean
}

/** 可排序项组件 */
const SortableItem = memo(function SortableItem (props: ISortableItemProps) {

    const { id, children, disabled = false } = props

    /** HOOKS: 使用可排序项 */
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id,
        disabled
    })

    /** CONST: 拖拽目标元素内联样式 */
    const style: CSSProperties = {
        transition,
        transform: CSS.Transform.toString({
            x: transform?.x || 0,
            y: transform?.y || 0,
            scaleX: 1,
            scaleY: 1
        }),
        opacity: isDragging ? 0.8 : undefined,
        zIndex: isDragging ? 999 : undefined,
        cursor: isDragging ? "grabbing" : "pointer"
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    )

})
