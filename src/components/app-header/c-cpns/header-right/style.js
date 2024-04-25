import styled from 'styled-components'

export const RightWapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${ props => props.theme.text.primaryColor};
  margin-right: 80px;
  font-size: 14px;
  font-weight: 600;
  .btns {
    display: flex;
    width: 180px;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    display: flex;
    width: 77px;
    height: 42px;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;

    ${props=>props.theme.mixin.boxShadow}
  }
`