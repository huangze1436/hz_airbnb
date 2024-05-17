import styled from 'styled-components'

export const FooterWrapper = styled.div`
    position: absolute;
    bottom: -416px;
    height: 364px;
    background-color: rgb(247,247,247);
    width: 100%;
    .fotter-main {
        width: 1032px;
        margin: 0 auto;
    }
    .footer-item{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 70%;
        border-top: 1px solid #eee;
        width: 100%;
    }
    .footer-center {
        height: 15%;
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 14px;
        border-top: 1px solid rgb(221, 221, 221);

    }
   .footer-bottem {
        height: 15%;
        font-size: 11px;    
        padding-top: 11px;
        border-top: 1px solid rgb(221, 221, 221);
   }
    
`