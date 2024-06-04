import React,{ memo, useState } from "react";
import {TestWrapper} from './style'
import Indicator from '@/base-ui/indicator';
import  classNames  from "classnames";

 const Testforindicator = memo(()=>{
    const arr = ['1111','2222','3333','4444','5555','6666','7777','8888','9999']
    const [currentIndex,setCurrentIndex] = useState(0)
    function handleClick (direction) {
        if (direction === 'left') {
            currentIndex!==0 && setCurrentIndex(currentIndex-1)
            currentIndex===0 && setCurrentIndex(arr.length-1)
        } else if (direction === 'right') {
            currentIndex!==arr.length-1 && setCurrentIndex(currentIndex+1)
            currentIndex===arr.length-1 && setCurrentIndex(0)
        }
    }
    return (
    <TestWrapper>
        <div className="contral">
             <button onClick={()=>{handleClick('left')}}>上一个</button>
            <button onClick={()=>{handleClick('right')}}>下一个</button>
        </div>
        <div className="list">
            {arr.length && <Indicator currentIndex={currentIndex}>
                {arr.map((item,index)=>{
                    return <span key={item}
                    className={classNames("item",{'active':index === currentIndex})}
                    >{item}</span>
                })}
            </Indicator>}
        </div>
       
    </TestWrapper>
    )
})

export default Testforindicator