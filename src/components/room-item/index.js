import React , {memo} from 'react';
import PropTypes from 'prop-types';
import {ItemWapper} from './style'
import {Rating} from '@mui/material';

const RoomItem = memo((props) => {
    const {itemData, part, itemClick } = props;
    function toDetail () {
      console.log(3);
      itemClick && itemClick()
    }
  return (
    <ItemWapper verifycolor={itemData?.verify_info?.text_color || '#39576a'} part={part?part:'25%'}> 
      <div className='inner' onClick={toDetail}>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc' >
          {itemData.verify_info.messages.join('.')}
        </div>
        <div className='name' title={itemData.name}>
          {itemData.name}
        </div>
        <div className='price'>
          ¥{itemData.price}/晚
        </div>
        <div className='bottom'>
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