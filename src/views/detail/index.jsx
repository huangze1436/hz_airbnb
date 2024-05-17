import React, { memo } from 'react';
import {DetailWrapper} from './style';
import HomePic from './c-cpns/home-pic';
import HomeTitle from './c-cpns/home-title'
import HomeMain from './c-cpns/home-main'


const Detail = memo(() => {
  const pic1 = 'https://a0.muscache.com/im/pictures/250df4bb-9752-4e02-acd5-00655f9278a6.jpg?im_w=720';
  const picArr = ['https://a0.muscache.com/im/pictures/8e1e7f46-2d03-4e48-94fa-4b75e2a5126d.jpg?im_w=720',
                'https://a0.muscache.com/im/pictures/28abef59-962a-4d75-8eda-0431822780c6.jpg?im_w=720',
                'https://a0.muscache.com/im/pictures/9244bb9e-f43b-4218-b9f9-b200ebcfd62f.jpg?im_w=720',
                'https://a0.muscache.com/im/pictures/2b93cdac-39ce-4559-9d9e-5f1d97fd51b8.jpg?im_w=720'
            ]
  return (
   <DetailWrapper>
    <div className="content">
      <HomeTitle></HomeTitle>
      <HomePic pic1= {pic1} pic2={picArr}/>
      <HomeMain></HomeMain>
    </div>
   </DetailWrapper>
   
  );
});

export default Detail;