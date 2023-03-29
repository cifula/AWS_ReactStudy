/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import React from "react";
import MainAside from './components/Aside/MainAside/MainAside';
import { Global } from "@emotion/react";
import { reset } from './style/Global/reset';
import Todo from "./pages/Todo/Todo"
import { Route, Routes } from "react-router-dom";
import UserInformation from "./pages/UserInformation/UserInformation";

const container = css`
    position: relative;
    margin: 50px auto;
    border: 2px solid #dbdbdb;
    width: 600px;
    height: 800px;
    background-color: white;
    overflow: hidden;
`;

function App() {
  return (
    <div css={container}>
      <Global style={reset} />
      <MainAside />
      <Routes>
        <Route path='/' Component={UserInformation} />
        <Route path='/userinformation' Component={UserInformation}/>
        <Route path='/todo' Component={Todo}/>
      </Routes>
    </div>
    
  );
}

export default App;
