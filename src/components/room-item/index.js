import React , {memo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {ItemWapper} from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import {Rating} from '@mui/material';
import { Carousel } from 'antd';
import Indicator from '../../base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
    const {itemData, part, itemClick } = props;
    const sliderRef = useRef()
    const [selectIndex, setSelectIndex] = useState(0)
     /** 事件处理的逻辑 */
  function controlClickHandle(isNext = true, event) {
    // 上一个面板/下一个面板
    isNext ? sliderRef.current.next(): sliderRef.current.prev()

    // 最新的索引
    let newIndex = isNext ? selectIndex + 1: selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 阻止事件冒泡
    event.stopPropagation()
  }
    console.log(itemData,'itemData');
    function toDetail () {
      console.log(3);
      itemClick && itemClick()
    }
     /** 子元素的赋值 */
  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div>
    
  )

  const sliderElement = (
    <div className='slider'>
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
      <div className='indicator'>
        <Indicator currentIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
  return (
    <ItemWapper verifycolor={itemData?.verify_info?.text_color || '#39576a'} part={part?part:'25%'}> 
      <div className='inner'>
        { !itemData.picture_urls ? pictureElement: sliderElement }
       
        <div className='desc' >
          {itemData.verify_info.messages.join('.')}
        </div>
        <div className='name' title={itemData.name}>
          {itemData.name}
        </div>
        <div className='price'>
          ¥{itemData.price}/晚
        </div>
        <div className='bottom' onClick={toDetail}>
          <Rating value={itemData.star_rating ?? 3.5}
           readOnly
           precision={0.5}
            sx={{fontSize:"12px", color:"#00848a"}}/>
            <span className='count'>
              {itemData.reviews_count}
            </span>
            {itemData?.bottom_info?.content && <span className='extra'>
              ·{itemData?.bottom_info?.content}
            </span>}
        </div>
      </div>
    </ItemWapper>
    
  )
  RoomItem.propTypes = {
    itemData:PropTypes.object,
    part:PropTypes.string,
    itemClick:PropTypes.func
  }
})

export default RoomItem