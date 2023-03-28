/** @jsxImportSource @emotion/react */

import React from 'react';
import TodoListButton from './TodoListButton/TodoListButton';
import { TfiPencilAlt } from 'react-icons/tfi';
import { BsTrash } from 'react-icons/bs';
import * as S from './style';

const TodoList = ({ todo, openModal, onRemove }) => {
    return (
        <li key={todo.todoIndex} css={S.todoContentContainer}>
            <div css={S.todoContentHeader}>
                <div css={S.todoDate}>{todo.todoDate}</div>
                <div css={S.todoDateTime}>{todo.todoDateTime}</div>
            </div>
            <div css={S.todoContentMain}>{todo.content}</div>
            <div css={S.todoContentFooter}>
                <TodoListButton onClick={() => openModal(todo.todoIndex)}><TfiPencilAlt /></TodoListButton>
                <TodoListButton onClick={() => onRemove(todo.todoIndex)}><BsTrash /></TodoListButton>
            </div>
        </li>
    );
};

export default TodoList;