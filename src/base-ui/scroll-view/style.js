import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
        padding: 8px 0;
        position: relative;

    
    .scroll {
        overflow: hidden;
        .content {
        display: flex;
        transition: transform 300ms ease;
    }
    }
    .control {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 9;
        width: 28px;height: 29px;
        border-radius: 50%;
        text-align: center;
        border-width: 2px;
        border-style: solid;
        border-color: #fff;
        background: #fff;
        box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
        cursor: pointer;
        &.left {
            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);

        }&.right {  
            right: 0;
            top: 50%;
            transform: translate(50%, -50%);

        }
    }

 
`