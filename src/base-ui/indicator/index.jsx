import React, { memo, useEffect, useRef } from "react";
import {IndicatorWrapper} from './style'

const Indicator = memo((props)=>{
    console.log(props,1);
    const contentRef = useRef()
    const {currentIndex=0} = props
    useEffect(()=>{
    //当前选中item
    const item = contentRef?.current.children[currentIndex]
    //当前元素视觉区域的宽度current.clientWidth
    const contentWidth = contentRef?.current?.clientWidth
    //当前选中item距离左侧的宽度、
    const itemWidthLeft = item.offsetLeft
    //当前选中item 本身宽度
    const itemContentWidth = item.clientWidth
    //当前可scroll总长度
    const contentScrollWidth = contentRef?.current?.scrollWidth
   
    let needTranform = itemContentWidth*0.5 + itemWidthLeft - contentWidth*0.5

    // //最左侧特殊情况的考虑
    if (needTranform < 0) {
        needTranform = 0
    } 
    const totalDistance = contentScrollWidth - contentWidth
    // //最右侧特殊情况的考虑
    if (needTranform > totalDistance) {
        needTranform = totalDistance
    }
    console.log(needTranform,'needTranform');

    contentRef.current.style.transform = `translate(${-needTranform}px)`
    // item.style.transform = `translate(${needTranform}px)`
    })
   
    return (
    <IndicatorWrapper>
        
        <div className="content" ref={contentRef}>
            {props.children}
        </div>
    </IndicatorWrapper>
    )
})

export default Indicator
