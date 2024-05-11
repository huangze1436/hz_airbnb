import styled from "styled-components";

export const ItemWapper = styled.div`
  width: ${(props) => props.part};
  padding: 8px;
  box-sizing: border-box;
  flex-shrink: 0;
  margin: 8px 0;

  .inner {
    width: 100%;
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

     img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
     }
  }
  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${ props => props.verifycolor};
   
  }
  .name { 
    font-size: 16px;
    font-weight: 700;
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 将对象作为弹性伸缩盒子模型显示 */
    display: -webkit-box;
    /* 限制在一个块元素显示的文本的行数 */
    /* -webkit-line-clamp 其实是一个不规范属性，使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；*/
    -webkit-line-clamp: 2;
    /* 设置或检索伸缩盒对象的子元素的排列方式 */
    -webkit-box-orient: vertical;
  }
  .price {
    margin: 8px 0;
    font-size: 14px;
  }
  .bottom {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};
    font-size: 12px;
    .Mui-readOnly {
      margin-right: -2px;
    }
    .count {
      margin:0 2px 0 4px;
    }
    .extra {
    }
  }
`