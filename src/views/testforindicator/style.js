import styled from "styled-components";

export const TestWrapper = styled.div `
    display: flex;
    flex-direction: column;
    height: 200px;
    .contral {
        height: 100px;
    }
    .item {
        display:inline-block;
        width: 40px;
        padding: 10px;
        border: 1px solid #677;
    }
    .active{
        color:red;
        background-color: #999;
    }
    .list {
        width: 300px;
        height: 100px;
    }
`