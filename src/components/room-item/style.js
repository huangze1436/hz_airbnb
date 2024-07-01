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
  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }

    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
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