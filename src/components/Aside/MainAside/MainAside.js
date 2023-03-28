/** @jsxImportSource @emotion/react */

import React from 'react';
import * as S from './style';
import { BiListCheck } from 'react-icons/bi';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { useState } from 'react';

const MainAside = () => {
  const [showAside, setShowAside] = useState(true);

  const handleToggleAside = () => {
    setShowAside(!showAside);
  };

    return (
      <aside css={S.menuAside}>
            <button css={S.menuButton} onClick={handleToggleAside}>{showAside ? '▶' : '◀'}</button>

            <header css={S.asideHeader}>
                <h1 css={S.headerTitle}><BiListCheck css={S.hLabel}/>TODOLIST</h1>
            </header>
            <nav css={S.menuNav}>
                <ul css={S.menuItemList}>
                    <a css={S.menuItems}>
                        <li><FaUsers css={S.lLabel}/>User Information</li>
                    </a>
                    <a css={S.menuItems}>
                        <li><BiListCheck css={S.lLabel}/>To Do List</li>
                    </a>
                </ul>
            </nav>
        </aside>
    );
};

export default MainAside;