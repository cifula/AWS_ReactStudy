/** @jsxImportSource @emotion/react */

import React from 'react';
import * as S from './style';
import { useRef } from 'react';
import { useState } from 'react';
import Modify from '../../components/Modal/PromptModal/Modify';
import TodoList from '../../components/TodoList/TodoList';
import AddTodo from './AddTodo/AddTodo';

const Todo = () => {
    const[isOpen, setIsOpen] = useState(false);
    const[modifyTodo, setModifyTodo] = useState({
        todoIndex: 0,
        todoDate: '',
        todoDateTime: '',
        todoContent: ''
        }
    );
    const todoIndex = useRef(1);
    const [todoList, setTodoList] = useState([]);
    const [inputs, setInputs] = useState();
    const inputRef = useRef();
    const addbuttonRef = useRef();

    const convertDay = (day) => {
        return day === 0 ? "일" 
            : day === 1 ? "월"
            : day === 2 ? "화"
            : day === 3 ? "수"
            : day === 4 ? "목"
            : day === 5 ? "금" : "토";
    }

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }

    const addHandler = () => {
        const nowDate = new Date();
        const todo = {
            todoIndex: todoIndex.current++,
            todoDate: `${nowDate.getFullYear()}.${nowDate.getMonth() + 1}.${nowDate.getDate()}(${convertDay(nowDate.getDay())})`,
            todoDateTime: `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`,
            ...inputs
        };

        setTodoList([...todoList, todo]);
        inputRef.current.value = '';
        setInputs('');
    }

    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            addHandler();
        }
    }

    const onRemove = (index) => {
        const copyTodoList = todoList.filter(todo => todo.todoIndex !== index);
        setTodoList(copyTodoList);
    }

    const updateTodo = (modifyTodo) => {
        setTodoList(
            todoList.map(
                todo => {
                     if(todo.todoIndex === modifyTodo.todoIndex) {
                         todo.content = modifyTodo.content;
                      }
                      return todo;
                  }
             )
        )
    }

    const openModal = (index) => {
        setIsOpen(true);
        setModifyTodo(todoList.filter(todo => todo.todoIndex === index)[0]);
    }

    return (
        <>
        <div css={S.container}>
            <AddTodo addbuttonRef={addbuttonRef} keyupHandler={keyupHandler} inputHandler={inputHandler} inputRef={inputRef} addHandler={addHandler}/>
                <ul css={S.todoContentList}>
                    {todoList.map(todo => {
                        return(
                            <TodoList todo={todo} openModal={openModal} onRemove={onRemove}/>
                        );
                    })}
                </ul>
        </div>
            
            {isOpen ? (<Modify title={'Edit Todo'} todo ={modifyTodo} setIsOpen={setIsOpen} updateTodo={updateTodo}/>) : ''}
        </>
    );
};

export default Todo;