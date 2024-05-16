import React , {memo, useCallback, useState} from "react";
import {HomeSetionV2Wapper} from './style'
import PropTypes from 'prop-types'
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSetionV2 = memo((props)=>{
    const {infoData, title, subtitle, tabNames} = props;

    const initCityName = Object.keys(infoData)[0]
    const [shouCity, setShouCity] = useState(initCityName);
    const nowCityList = infoData?.[shouCity]

    const tabClickHandle = useCallback((cityName)=>{
        setShouCity(cityName)
    },[])
    return (
        <HomeSetionV2Wapper>
            <SectionHeader title={title} subtitle={subtitle}></SectionHeader>
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>

            <SectionRooms rooms={nowCityList} part={'33.3%'}></SectionRooms>
            <SectionFooter title={shouCity}></SectionFooter>
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