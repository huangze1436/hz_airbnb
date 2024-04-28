import React, { memo ,useEffect,useState} from 'react';
import { RightWapper } from './style';
import IconLogo from '@/assets/svg/icon_logo';
import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  //副作用代码
useEffect(()=>{
  function windowHandleClick() {
    setShowPanel(false);
  }
  window.addEventListener('click',windowHandleClick,true);

  return () => {
    window.removeEventListener('click',windowHandleClick,true);
  }
},[])

  // 事件处理函数
  function profileClickHandle() {
    
    setShowPanel(!showPanel);
  }

  return (
    <RightWapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'> <IconGlobal/></span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu/>
        <IconLogo/>
       { showPanel && (<div className="panel">
          <div className="top">
            <div className="item register">注册</div>
            <div className="item login">登录</div>
          </div>
          <div className="bottom">
            <div className="item sale">出租房源</div>
            <div className="item experience">开展体验</div>
            <div className="item help">帮助</div>
          </div>
        </div>)}
      </div>
    </RightWapper>
  );
});

export default HeaderRight;