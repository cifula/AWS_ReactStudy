/** @jsxImportSource @emotion/react */

import React from 'react';
import * as S from './style';
import { BiListCheck } from 'react-icons/bi';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainAside = () => {
  const [showAside, setShowAside] = useState(false);

  const handleToggleAside = () => {
    if(showAside === true) {
        setShowAside(false);
    } else if(showAside === false) {
        setShowAside(true);
    }
  };

    return (
        <>
          <aside css={showAside ? S.menuAside : S.hiddenMenu}>
              <button css={S.menuButton} onClick={handleToggleAside}>
                    {showAside ? '◀' : '▶' }
              </button>
              <header css={S.asideHeader}>
                   <h1 css={S.headerTitle}><BiListCheck css={S.hLabel}/>TODOLIST</h1>
               </header>
               <nav css={S.menuNav}>
                    <ul css={S.menuItemList}>
                        <Link to="/userinformation" css={S.menuItems} onClick={handleToggleAside}>
                            <li><FaUsers css={S.lLabel}/>User Information</li>
                        </Link>
                        <Link to="/todo" css={S.menuItems} onClick={handleToggleAside}>
                            <li><BiListCheck css={S.lLabel}/>To Do List</li>
                        </Link>
                    </ul>
              </nav>
           </aside>
        </>


    );
};

export default MainAside;
