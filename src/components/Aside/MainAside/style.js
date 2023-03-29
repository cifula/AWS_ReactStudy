import { css } from "@emotion/react";

export const menuAside = css`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 99;

    width: 300px;
    height: 100%;
    box-shadow: 1px 0px 5px 1px black;
    background-color: #454545;
    transition: left 1s ease;
`;

export const asideHeader = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    padding: 20px 5px 20px 10px;
    height: 65px;

    background-color: #121212;
`;

export const headerTitle = css`
    display: flex;
    color: white;
    font-size: 18px;
    cursor: default;
    align-items: center;
`;

export const menuButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -13px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0;
    width: 13px;
    height: 60px;

    background-color: #454545;
    color: #ffc472;

    &:hover, &:active {
        background-color: #454545;
        text-shadow: 0px 0px 5px #ffc472;
    }
`;

export const hLabel = css`
    padding: 0px 15px;
    font-size: 24px;
`;

export const menuNav = css`
    padding-top: 20px;
`;

export const menuItemList = css`
    box-sizing: border-box;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const menuItems = css`
    display: flex;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    padding: 0px 20px;
    height: 40px;
    background-color: #303030;

    font-size: 16px;
    color: white;
    text-decoration: none;

    &:hover {
        background-color: #121212;
    }
`;

export const lLabel = css`
    padding: 0 10px;
    font-size: 16px;
    color: white; 
`;

export const hiddenMenu = css`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 99;

    width: 300px;
    height: 100%;
    box-shadow: 1px 0px 5px 1px black;
    background-color: #454545;
    transition: left 1s ease;
    left: -300px;
`;