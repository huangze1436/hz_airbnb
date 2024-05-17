import React, { memo } from 'react';
import {HomeMainWrapper} from './style';
import PriceTip from '@/components/price-tip'



const HomeMain= memo(() => {
  return (
   <HomeMainWrapper>
    <div className='left'></div>
    <PriceTip/>
   </HomeMainWrapper>
   
  );
});

export default HomeMain;