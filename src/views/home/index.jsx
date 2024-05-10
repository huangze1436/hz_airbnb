import React, { memo, useEffect, useState } from 'react';
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDateAction } from '../../store/modules/home';
import HomeSetionV1 from './c-cpns/home-setion-v1';

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
        <HomeSetionV1 infoData={goodPriceInfo}></HomeSetionV1>
        <HomeSetionV1 infoData={highScoreInfo}></HomeSetionV1>
      </div>
    </HomeWrapper>
   
  );
});

export default Home;