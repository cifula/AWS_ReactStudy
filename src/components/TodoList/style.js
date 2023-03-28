import { css } from "@emotion/react";

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