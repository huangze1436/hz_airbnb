import React, { memo } from 'react';
import { RightWapper } from './style';
import IconLogo from '@/assets/svg/icon_logo';
import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';

const HeaderRight = memo(() => {
  return (
    <RightWapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'> <IconGlobal/></span>
      </div>
      <div className="profile">
        <IconMenu/>
        <IconLogo/>
      </div>
    </RightWapper>
  );
});

export default HeaderRight;