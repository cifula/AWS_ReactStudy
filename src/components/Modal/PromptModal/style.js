import { css } from "@emotion/react";

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

