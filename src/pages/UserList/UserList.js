/** @jsxImportSource @emotion/react */

import React, { useEffect } from 'react';
import * as S from './style';
import { useRef } from 'react';
import { useState } from 'react';

const UserList = () => {
    useEffect(() => {
        console.log("컴포넌트 랜더링");
    }, [])

    const user = {
        id: 0,
        username: '',
        password: '',
        name: '',
        email: ''
    }

    
    const userIndex = useRef(1);
    const [users, setUsers] = useState([]);
    const [inputs, setInputs] = useState(user);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const addbuttonRef = useRef();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }

    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            let index = 0;
            switch(e.target.name) {
                case 'username': index = 1; break;
                case 'password': index = 2; break;
                case 'name': index = 3; break;
                default: addbuttonRef.current.click();
            }
            if(index !== 0) {
                inputRefs[index].current.focus();
            }
            
        }
    }

    const addHandler = () => {
        const user = {
            ...inputs
        };
        
        user.id = userIndex.current++;
        setUsers([...users, user]);
    }

    const onRemove = (index) => {
        const copyUsers = users.filter(user => user.id !== index);
        setUsers(copyUsers)
    }

    return (
        <div css={S.container}>
            <div>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]}/>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]} />
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]} />
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]} />
                <button type='button' onClick={addHandler} ref={addbuttonRef}>추가</button>
            </div>
            <table css={S.table}>
                <thead>
                <tr css={S.ThAndTd}>
                    <th css={S.ThAndTd}>index</th>
                    <th css={S.ThAndTd}>username</th>
                    <th css={S.ThAndTd}>password</th>
                    <th css={S.ThAndTd}>name</th>
                    <th css={S.ThAndTd}>email</th>
                    <th css={S.ThAndTd}>delete</th>
                </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td css={S.ThAndTd}>{user.id}</td>
                                <td css={S.ThAndTd}>{user.username}</td>
                                <td css={S.ThAndTd}>{user.password}</td>
                                <td css={S.ThAndTd}>{user.name}</td>
                                <td css={S.ThAndTd}>{user.email}</td>
                                <td css={S.ThAndTd}>
                                    <button onClick={() => onRemove(user.id)}>삭제</button>
                                </td>
                            </tr>
                    )})}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;