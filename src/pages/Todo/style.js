import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* margin: 50px auto; */
    width: 100%;
    height: 100%;
`;

export const todoContentList = css`
    display: flex;
    list-style: none;
    
    flex-wrap: wrap;
    width: 550px;
    height: 700px;
    
    overflow-y: auto;
`;

export const todoContentContainer = css`
    box-sizing: border-box;
    margin: 10px;
    width: 230px;
    height: 230px;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
`;

export const todoContentHeader = css`
    box-sizing: border-box; 
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    height: 20%;
    padding: 10px;
    padding-bottom: 5px;
`;

export const todoDate = css`
    display: flex;
    align-items: flex-start;
    height: 100%;
    font-size: 20px;
    line-height: 15px;
`

export const todoDateTime = css`
    display: flex;
    align-items: flex-end;
    font-size: 11px;
`

export const todoContentMain = css`
    box-sizing: border-box; 
    display: flex;
    padding: 10px;
    height: 65%;
    word-break: break-all;
    line-height: 25px;
`;

export const todoContentFooter = css`
    box-sizing: border-box; 
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    padding-top: 0px;
    height: 15%;
`;

export const modalContainer = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #000000aa;
`;

export const modalBox = css`
    border-radius: 7px;
    width: 350px;
    height: 200px;
    background-color: #fafafa;
    box-shadow: 0px 0px 3px 1px white;
    overflow: hidden;
`;

export const modalHeader = css`
    box-sizing: border-box; 
    display: flex;
    border-bottom: 1px solid #dbdbdb;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    height: 20%;
`;

export const modalTitle = css`
    font-size: 18px;
    font-weight: 600;

`;

export const modalMain = css`
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60%;
`;

export const modalInput = css`
    outline: none;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 100%;
    background-color: inherit;
    &:focus {
        background-color: #eee;
    }
`;

export const modalFooter = css`
    box-sizing: border-box; 
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 20%;
`;

export const modalButton = css`
    border: none;
    background-color: #ffffff00;
    width: 50%;
    height: 100%;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;