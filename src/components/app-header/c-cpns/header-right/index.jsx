import React, { memo } from 'react';
import { RightWapper } from './style';
import IconLogo from '../../../../assets/svg/icon_logo';

const HeaderRight = memo(() => {
  return (
    <RightWapper>
      123456
      <IconLogo/>
    </RightWapper>
  );
});

export default HeaderRight;