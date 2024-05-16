import React , {memo} from "react";
import {HomeSetionV3Wapper} from './style'
import PropTypes from 'prop-types'
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import ScrollView from '@/base-ui/scroll-view';
import RoomItem from "@/components/room-item";

const HomeSetionV3 = memo((props)=>{
    const {infoData, title, subtitle} = props;

    return (
        <HomeSetionV3Wapper>
            <SectionHeader title={title} subtitle={subtitle}></SectionHeader>
            <ul className='room-list'>
                <ScrollView>
                    {infoData?.slice(0,8).map(item =>
                        <RoomItem key={item.id} itemData={item} part={'20%'}></RoomItem>
                    )}
                </ScrollView>
            </ul>
        </HomeSetionV3Wapper>
        )
    HomeSetionV3.propTypes = {
        infoData: PropTypes.array,
        title: PropTypes.string,
        subtitle: PropTypes.string,
    }
})


export default HomeSetionV3