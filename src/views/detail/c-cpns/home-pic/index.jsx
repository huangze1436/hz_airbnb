import React, { memo } from 'react';
import {HomePicWrapper} from './style';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import coverImg from '@/assets/img/sea-1.webp';

const HomePic = memo((props) => {
    const {pic1, pic2} = props;
    console.log(pic2);
  return (
   <HomePicWrapper>
        <div className='first-pic'>
            <img src={pic1} alt="" />
        </div>
        <div className='second-pic'>
            {pic2?.map((item, index)=>{
                return  <img src={item} alt="" className={classNames('item',{'singular':index % 2 === 0 }, {'special':index===2 || index===3}, {'evennumbers':index % 2 !== 0})}/>
            })}
        </div>
   </HomePicWrapper>
   
  );
});

HomePic.propTypes = {
    pic1: PropTypes.string,
    pic2: PropTypes.array
}

export default HomePic;