import React , {memo} from "react";
import {HomeSetionV1Wapper} from './style'
import PropTypes from 'prop-types'
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const HomeSetionV1 = memo((props)=>{
    const {infoData} = props;
    return (
        <HomeSetionV1Wapper>
            <SectionHeader title={infoData.title}></SectionHeader>
            <SectionRooms rooms={infoData.list}></SectionRooms>
        </HomeSetionV1Wapper>
        )

    HomeSetionV1.propTypes = {
        infoData: PropTypes.object,
    }
})


export default HomeSetionV1