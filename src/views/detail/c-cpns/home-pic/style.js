import styled from "styled-components";

export  const HomePicWrapper = styled.div`
    display: flex;
    height: 506px;
    width: 1722px;
    margin-top: 24px;
    .first-pic,.second-pic {
        height: 506px;
        width: 506px;
        img:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
    .second-pic {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .item {
            width: calc(50% - 8px);
            height: 49%;
            object-fit: cover;
        }
        .singular {
            margin-right: 8px;
        }
        .special {
            margin-top: 8px;
        }
        .evennumbers {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
    .first-pic {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        margin-right: 8px;
        img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            object-fit: cover;
        }
    }
`;