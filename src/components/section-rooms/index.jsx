import React , {memo} from 'react';
import PropTypes from 'prop-types';
import {RoomWrapper} from './style'
import RoomItem from '../../components/room-item';

const SectionRooms = memo((props) => {
    const {rooms} = props;
    console.log(rooms);
  return (
    <RoomWrapper> 
      <ul className='room-list'>
        {rooms?.slice(0,8).map(item =>
        <RoomItem key={item.id} itemData={item}></RoomItem>
        )}
    </ul>
    </RoomWrapper>
    
  )
  SectionRooms.propTypes = {
    rooms: PropTypes.array,
  }
})

export default SectionRooms