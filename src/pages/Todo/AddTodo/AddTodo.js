/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import * as S from './style';

const AddTodo = ({ addbuttonRef, keyupHandler, inputHandler, inputRef, addHandler}) => {
    return (
        <div css={S.inputContainer}>
            <input type="text" css={S.input} onKeyUp={keyupHandler} onChange={inputHandler} ref={inputRef} name='content' placeholder="please enter todo..."/>
            <button onClick={addHandler} ref={addbuttonRef} css={S.inputButton}>+</button>
        </div>
    );
};

export default AddTodo;