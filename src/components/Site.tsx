import React from 'react';
import styles from './Site.module.css';

import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Page from "./pages/Page";
import { dataState } from "../data/dataState";
import styled from "styled-components";
import { useWindowSize } from "../helpers/useWindowSize";


export const Site = () => {

    let size = useWindowSize();

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                {size > 1200
                    ? <div className={styles.nav}>
                        <NavWrapper><NavLink to={'/page/0'}>page1</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={'/page/1'}>page2</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={'/page/2'}>page3</NavLink></NavWrapper>
                    </div>
                    : <div/>
                }

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

                        {/*<Route path={'/*'} element={<Error404/>}/>*/}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export const NavWrapper = styled.div`
  margin: 10px 0 10px 30px;
  font-size: 30px;

  & > a {
    color: #282c34;

    text-decoration: none;
  }

  & > a.active {
    color: #61dafb;
    text-decoration-line: underline;
  }

  & > a:hover {
    color: steelblue;
  }
`
