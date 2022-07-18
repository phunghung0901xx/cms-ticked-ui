import classNames from 'classnames/bind';
import styles from './HomePage.module.scss'
import LinesChart from './LineChart/LinesChart'
import React from 'react';
import DoughnutAndPie from './DoughnutAndPie/DoughnutAndPie'

const cx=classNames.bind(styles)
function HomePage() {
    return (
     
    <div className={cx('content') }>
        <LinesChart  className={cx('line')}></LinesChart>
        <DoughnutAndPie className={cx('pie')}></DoughnutAndPie>
</div>

    )
}

export default HomePage;