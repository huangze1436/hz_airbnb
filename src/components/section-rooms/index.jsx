import React , {memo} from 'react';
import PropTypes from 'prop-types';
import {RoomWrapper} from './style'
import RoomItem from '../../components/room-item';

const SectionRooms = memo((props) => {
    const {rooms, part} = props;
    
  return (
    <RoomWrapper> 
      <ul className='room-list'>
        {rooms?.slice(0,8).map(item =>
        <RoomItem key={item.id} itemData={item} part={part}></RoomItem>
        )}
    </ul>
    </RoomWrapper>
    
  )
  SectionRooms.propTypes = {
    rooms: PropTypes.array,
    part: PropTypes.string
  }
})

export default SectionRooms