import React , {memo} from "react";
import {HomeSetionV2Wapper} from './style'
import PropTypes from 'prop-types'
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";

const HomeSetionV2 = memo((props)=>{
    const {infoData, title, subtitle, tabNames} = props;
    console.log(66);
    console.log(infoData);
    return (
        <HomeSetionV2Wapper>
            <SectionTabs tabNames={tabNames}></SectionTabs>
            <SectionHeader title={title} subtitle={subtitle}></SectionHeader>
            <SectionRooms rooms={infoData} part={'33.3%'}></SectionRooms>
        </HomeSetionV2Wapper>
        )

    HomeSetionV2.propTypes = {
        infoData: PropTypes.array,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        tabNames: PropTypes.array
    
    }
})


export default HomeSetionV2