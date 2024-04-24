import React, { memo, useEffect, useState } from 'react';
import Hyrequest from '../../services/request'

const Home = memo(() => {
const [highscore,setHighscore] = useState()
//网络请求

useEffect(()=>{
  Hyrequest.get({
    url:'/home/highscore',
  }).then(res=>{
    console.log(res)
    setHighscore(res)
  })
},[])

  return (
   <div className="Home">
    Home
    <h2>{highscore?.title}</h2>
    <ul>
    {highscore?.list?.map(item=>{
      return <li key={item.id}>{item.name}</li>
    })}
      </ul>
   </div>
  );
});

export default Home;