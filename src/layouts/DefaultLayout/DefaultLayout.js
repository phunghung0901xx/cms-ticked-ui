
import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';
import Container from '../components/Container/Container'

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
               <Container/>
                
            </div>
            <div className={cx('sidebar')}>
              <Sidebar />
            </div>
        </div>
    );
}



export default DefaultLayout;