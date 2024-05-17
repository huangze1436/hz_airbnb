import React, { memo } from 'react';
import { FooterWrapper } from './style';
import FooterItem from './c-cpns/footer-item';

const AppFooter = memo(() => {
  const item1 = ['客服支持','帮助中心',"AirCover [四海无忧]",'反歧视','残障人士支持','取消预订的选择','举报邻里问题']
  const item2 = ['关于我们','联系我们','加入我们','商家入驻','营销中心','手机下载']
  const item3 = [
    "新闻",
    "AirCover [四海无忧]",
    "新功能",
    "出租资源",
    "工作机会",
    "社区论坛",
    "投资者",
    "Airbnb 紧急住宿"
  ]

  return (
    <FooterWrapper>
      <div className='fotter-main'>
        <div className='footer-item'>
          <FooterItem data={item1}/>
          <FooterItem data={item2}/>
          <FooterItem data={item3}/>
        </div>
        <div className='footer-center'>
          <span>© 2024 Airbnb, Inc.隐私·条款·站点地图</span>
          <span>简体中文 (CN) ￥ CNY</span>
        </div>
        <div className='footer-bottem'>
          图片中的文字内容如下：京ICP备16017121号-1 京ICP证160733号 京公网安备11010502032345号 安抵迎网络（北京）有限公司 营业执照 全国旅游投诉渠道12345 违法和不良信息举报邮箱 jubao@airbnb.cn
        </div>
      </div>
      
    </FooterWrapper>
   
  );
});

export default AppFooter;