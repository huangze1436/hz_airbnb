import React, { memo, useEffect ,useRef } from 'react';
import {ScrollViewWrapper} from '../scroll-view/style'
import IconArrowLeft from '../../assets/svg/icon-arrow-left'
import IconArrowRight from '../../assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    const [showRight, setShowRight] = React.useState(false)
    const [showLeft, setshowLeft] = React.useState(false)
    const [positionIndex, setPositionIndex] = React.useState(0)
    const scrollContentRef = useRef()
    const totalDistancRef = useRef()

    useEffect(()=>{
        const scrollWidth = scrollContentRef.current.scrollWidth;
        const clientWidth = scrollContentRef.current.clientWidth;
        const totalDistance = scrollWidth - clientWidth;
        totalDistancRef.current = totalDistance
        setShowRight(totalDistance>0)
        console.log(scrollWidth,clientWidth);

    },[props.children])
    // function rightClickHandel () {
    //     const newIndex = positionIndex+1
    //     const newEl = scrollContentRef.current.children[newIndex]
    //     const newElOffsetLeft = newEl.offsetLeft
    //     console.log(newElOffsetLeft);
    //     scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
    //     setPositionIndex(newIndex)
    //     setShowRight(totalDistancRef.current > newElOffsetLeft)
    //     setshowLeft(newElOffsetLeft > 0)
    // }
    function controlClickHandel (isright) {
        const newIndex = isright ? positionIndex+1 : positionIndex-1
        const newEl = scrollContentRef.current.children[newIndex]
        const newElOffsetLeft = newEl.offsetLeft
        console.log(newElOffsetLeft);
        scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
        setPositionIndex(newIndex)
        setShowRight(totalDistancRef.current > newElOffsetLeft)
        setshowLeft(newElOffsetLeft > 0)
    }
   return (
    <ScrollViewWrapper>
        {showLeft && (
            <div onClick={e=>controlClickHandel(false)} className='control left'>
                <IconArrowLeft></IconArrowLeft>
            </div>
        )}
        {showRight && (
            <div onClick={e=>controlClickHandel(true)} className='control right'>
                <IconArrowRight></IconArrowRight>
            </div>
        )}
        <div className='scroll'>
            <div className='content' ref={scrollContentRef}>
                {props.children}
            </div>
        </div>
        
        
    </ScrollViewWrapper>
  )
});

export default ScrollView;