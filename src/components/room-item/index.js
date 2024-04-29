import React , {memo} from 'react';
import PropTypes from 'prop-types';
import {ItemWapper} from './style'

const RoomItem = memo((props) => {
    const {itemData} = props;
  return (
    <ItemWapper verifyColor={itemData?.verify_info?.text_color || '#39576a'}> 
      <div className='inner'>
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
          ¥{itemData.price}
        </div>

      </div>
    </ItemWapper>
    
  )
  RoomItem.propTypes = {
    itemData:PropTypes.object
  }
})

export default RoomItem