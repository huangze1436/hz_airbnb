import React, { memo, useEffect, useState } from 'react';
import Hyrequest from '../../services/request'
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDateAction } from '../../store/modules/home';

const Home = memo(() => {
  //从redux中获取数据
  const { goodPriceInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
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
        {goodPriceInfo.title}
      </div>
    </HomeWrapper>
   
  );
});

export default Home;