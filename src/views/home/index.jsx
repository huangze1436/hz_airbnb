import React, { memo, useEffect, useState } from 'react';
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDateAction } from '../../store/modules/home';
import HomeSetionV1 from './c-cpns/home-setion-v1';
import HomeSetionV2 from './c-cpns/home-setion-v2';

const Home = memo(() => {
  //从redux中获取数据
  debugger
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo
    
  }),shallowEqual)
  const tabNames = discountInfo?.dest_address?.map(item=>item.name)
  //派发异步事件 发生网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDateAction())
  }, [dispatch])
console.log(discountInfo);
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        <HomeSetionV2
          infoData={discountInfo?.dest_list?.['成都']}
          title={discountInfo?.title}
          subtitle={discountInfo?.subtitle}
          tabNames={tabNames}
          >
        </HomeSetionV2> 
        <HomeSetionV1 infoData={goodPriceInfo}></HomeSetionV1>
        <HomeSetionV1 infoData={highScoreInfo}></HomeSetionV1>
      </div>
    </HomeWrapper>
   
  );
});

export default Home;