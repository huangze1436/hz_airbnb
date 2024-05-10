import React, { memo, useEffect, useState } from 'react';
import Hyrequest from '../../services/request'
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDateAction } from '../../store/modules/home';
import SectionHeader from '../../components/section-header';
import RoomItem from '../../components/room-item';

const Home = memo(() => {
  //从redux中获取数据
  const { goodPriceInfo, highScoreInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo
  }),shallowEqual)
  //派发异步事件 发生网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDateAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
            <ul className='room-list'>
              {goodPriceInfo.list?.slice(0,8).map(item =>
                <RoomItem key={item.id} itemData={item}></RoomItem>
                )}
            </ul>
        </div>
        <div className="high-score">
          <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}></SectionHeader>
            <ul className='room-list'>
              {highScoreInfo.list?.slice(0,8).map(item =>
                <RoomItem key={item.id} itemData={item}></RoomItem>
                )}
            </ul>
        </div>
      </div>
    </HomeWrapper>
   
  );
});

export default Home;