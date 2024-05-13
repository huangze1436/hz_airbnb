import React, { memo, useEffect, useState } from 'react';
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDateAction } from '../../store/modules/home';
import HomeSetionV1 from './c-cpns/home-setion-v1';
import HomeSetionV2 from './c-cpns/home-setion-v2';
import  isEmptyO  from '../../utils/index'

const Home = memo(() => {
  //从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo,
    hotRecommendInfo:state.home.hotRecommendInfo
    
  }),shallowEqual)
  debugger
  console.log(hotRecommendInfo);
  const tabNames = discountInfo?.dest_address?.map(item=>item.name)
  const tabNames2 = hotRecommendInfo?.dest_address?.map(item=>item.name)
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
        { isEmptyO(discountInfo||{}) && <HomeSetionV2
          infoData={discountInfo?.dest_list}
          title={discountInfo?.title}
          subtitle={discountInfo?.subtitle}
          tabNames={tabNames}
          >
        </HomeSetionV2>} 
        { isEmptyO(hotRecommendInfo||{}) &&<HomeSetionV2
          infoData={hotRecommendInfo?.dest_list}
          title={hotRecommendInfo?.title}
          subtitle={hotRecommendInfo?.subtitle}
          tabNames={tabNames2}
          >
        </HomeSetionV2>}
        <HomeSetionV1 infoData={goodPriceInfo}></HomeSetionV1>
        <HomeSetionV1 infoData={highScoreInfo}></HomeSetionV1>
      </div>
    </HomeWrapper>
   
  );
});

export default Home;