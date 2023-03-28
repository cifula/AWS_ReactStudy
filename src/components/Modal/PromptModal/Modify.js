/** @jsxImportSource @emotion/react */

import React from 'react';
import * as S from '../../../pages/Todo/style';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ModalButton from './../ModalButton/ModalButton';

const Modify = (props) => {
    const modalRef = useRef()
    const [modalContent, setModalContent] = useState('');

    useEffect(
        () => {
            setModalContent(props.todo.content);

            const handler = (e) => {
                if(!modalRef.current.contains(e.target)) {
                    props.setIsOpen(false);
                };
            }

            document.addEventListener('mousedown', handler);
            
            return () => {
                document.removeEventListener('mousedown', handler);
            }
        },[]
    );

    const contentChange = (e) => {
        setModalContent(e.target.value);
    }

    const onSubmit = () => {
        props.updateTodo({
            todoIndex: props.todo.todoIndex,
            content: modalContent,
        });
        closeModal();
    }

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    const closeModal = () => {
        props.setIsOpen(false);
    }

    return(
        <div css={S.modalContainer}>
            <div css={S.modalBox} ref={modalRef}>
                <div css={S.modalHeader}>
                    <h1 css={S.modalTitle}>{props.title}</h1>
                </div>
                <div css={S.modalMain}>
                    <input type="text" onKeyUp={onKeyUp} onChange={contentChange} css={S.modalInput} defaultValue={props.todo.content} />
                </div>
                <div css={S.modalFooter}>
                    <ModalButton buttonCount={2} onClick={onSubmit}>확인</ModalButton>
                    <ModalButton buttonCount={2} onClick={closeModal}>취소</ModalButton>
                </div>
            </div>
        </div>
    );
};




export default Modify;