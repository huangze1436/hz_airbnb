import React, { memo } from 'react';
import {HomeTitleWrapper} from './style';
import IconLove from '@/assets/svg/icon_love';
import IconGet from '@/assets/svg/icon_get';


const HomeTitle = memo(() => {
  return (
   <HomeTitleWrapper>
    <div className='titleName'>Yeomunhyang泳池别墅A101</div>
    <div className='titleBtn'>
        <div className='btn'>
            <IconGet/>
            <span>分享</span>
            </div>
        <div className='btn'>
            <IconLove/>
            <span>收藏</span>
            </div>
    </div>
   </HomeTitleWrapper>
   
  );
});

export default HomeTitle;