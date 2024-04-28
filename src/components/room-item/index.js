import React , {memo} from 'react';
import PropTypes from 'prop-types';
import {ItemWapper} from './style'

const RoomItem = memo((props) => {
    const {itemData} = props;
  return (
    <ItemWapper> 
     {itemData.name}
    </ItemWapper>
    
  )
  RoomItem.propTypes = {
    itemData:PropTypes.object
  }
})

export default RoomItem