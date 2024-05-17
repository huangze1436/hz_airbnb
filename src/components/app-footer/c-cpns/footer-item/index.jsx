import React, { memo , useEffect, useRef } from 'react';
import { FooterItemWrapper } from './style';
import propstype from 'prop-types' 
import classNames from 'classnames'

const FooterItem = memo((props) => {
  const {data} = props;
  
  // ='400'
  return (
   <FooterItemWrapper>
    <div className='main' >
      {data?.map((item,index)=>{
          return <div key={index} className={classNames('item',{'item-active':index===0})}>
            {item}
          </div>
        })}
    </div>
   </FooterItemWrapper>
  );
});
FooterItem.propstypes = {
  data:propstype.array
}

export default FooterItem;