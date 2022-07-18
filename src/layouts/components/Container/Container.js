import classNames from 'classnames/bind';
import styles from './Container.module.scss'
import ListTickedPage from './pages/List-ticked/ListTickedPage'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SettingPage from './pages/Setting-page/SettingPage'
import CheckTickedPage from './pages/check-ticked/CheckTickedPage'
import HomePage from './pages/Home-page/HomePage'
import ListTickedUsed from './pages/List-ticked/ListTickedUsed/ListTickedUsed';
const cx=classNames.bind(styles)
function Container() {
    return (
       <Router>
    <div className={cx('content') }>
       <Routes>
      <Route path ="/List"  exact element={ <ListTickedPage />} />
      <Route path ="/Setting"  exact element={ <SettingPage />} />
      <Route path ="/Check"  exact element={ <CheckTickedPage/>} />
      <Route path ="/"  exact element={ <HomePage/>} />
      <Route path ="/List/Used"  exact element={ <ListTickedUsed />} />
       </Routes>
</div>
</Router>
    )
}

export default Container;