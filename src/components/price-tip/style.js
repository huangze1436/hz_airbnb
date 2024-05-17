import styled from "styled-components";


export const PriceTipWrapper = styled.div`
  width: 372px;
  height: 423px;
  border: 1px solid rgba(0,0,0,.1);
  position: -webkit-sticky;
  position: sticky;
  top: 25px;
  margin-top: 32px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline ;
    margin-bottom: 24px ;
    width: 100%;
    
    .price {
      color: rgb(34, 34, 34) !important;
      font-size: 22px;
      font-weight: 600;
      margin-right: 3px;
      margin-left: 7px;
    }
  }
  .tip {
    height: 55px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .price-cacl {
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .price-cacl-x {
      text-decoration: underline;
    }
  }
  .price-total {
    height: 55px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    color: rgb(34, 34, 34);
    font-size: 16px;
    font-weight: 600;
    border-top: 1px solid rgb(221, 221, 221);
  }
  .date-mian {  
    height: 122px;
    width: 322px;
    border-radius: 8px;
    border: 1px solid rgb(0,0,0 );
    display: flex;
    flex-direction: column;
    .date-mian-title {
      flex: 1;
      display: flex;
      .date-mian-left,.date-mian-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 11px 15px;
        .text {
          font-size: 10px;
          color: rgb(34, 34, 34);
          margin-bottom: 3px;
        }
      }
      .date-mian-right {
        border-left: 1px solid rgb(0,0,0 );
      }
    }
    .date-mian-content {
      flex: 1;
      border-top: 1px solid rgb(0,0,0 );
    }
  }
  .choose {
    width: 322px;
    height: 48px;
    margin-top: 15px;
    button {
      border: none;
      width: 100%;
      height: 100%;
      background-color:  rgb(230, 30, 77) ;
      color: rgb(255,255,255);
      font-family: 'Circular',-apple-system,'BlinkMacSystemFont','Roboto','Helvetica Neue',sans-serif;
      font-size: 16px;
      border-radius: 8px;
    }
  }
`