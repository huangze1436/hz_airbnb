import styled from "styled-components";

export  const TabWapper = styled.div `
ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 24px;
    li {
        flex: 1;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2px 5px;
        padding: 10px 1px;
        border-radius:3px;
        cursor: pointer;
        ${props=>props.theme.mixin.boxShadow}
    }
    li:hover {

    }
    .active {
        background-color: ${props=>props.theme.color.secondaryColor};
        border: 1px solid ${props=>props.theme.color.secondaryColor};
        color: #fff;
    }
}

`