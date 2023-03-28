/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

const TodoListButton = ( { onClick, children }) => {
    const todoContentButton = css`
        border: none;
        padding: 5px;
        background-color: white;
        cursor: pointer;
`;

    return (
        <div>
            <button type='button' css={todoContentButton} onClick={onClick}>{children}</button>
        </div>
    );
};

export default TodoListButton;