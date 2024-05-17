import styled from "styled-components";

export  const HomeTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    .titleName {
        font-size: 26px;
        font-weight: 600;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important;    
    }
    .titleBtn {
        display: flex;
        flex-direction: row;
        .btn {
            width: 52px;
            height: 18px;
            padding: 8px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
           
            span {
                font-size: 14px;
                margin-left: 3px;
                color: rgb(34, 34, 34);
                line-break:strict;
                font-family: 'Circular', -apple-system, 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', sans-serif;
                text-decoration: underline;
            }
        }
        .btn:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.02);
        }
    }
`;