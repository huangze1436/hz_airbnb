import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PriceTipWrapper } from './style'

const PriceTip = memo((props) => {

  return (
    <PriceTipWrapper>
     <div className='title'><span className='price'>￥1,634</span> <span>/晚</span></div>
     <div className='date-mian'>
        <div className='date-mian-title'>
          <div className='date-mian-left'>
            <span className='text'>入住日期</span>
            <span>2024/6/16</span>
            </div>
          <div className='date-mian-right'>
            <span className='text'>离开日期</span>
            <span>2024/6/16</span>
          </div>
        </div>
        <div className='date-mian-content'>
          <div></div>
          <div></div>
        </div>
     </div>
     <div className='choose'><button>预订</button></div>
     <div className='tip'>
      您现在不会被收费
     </div>
     <div className='price-cacl'>
      <span className='price-cacl-x'>￥1，634 × 5晚</span>
      <span>￥8，168</span>
     </div>
     <div className='price-total'>
      <span>总价</span>
      <span>￥8，168</span>
     </div>
    </PriceTipWrapper>
  )
})


export default PriceTip