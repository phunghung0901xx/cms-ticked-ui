import classNames from 'classnames/bind';
import styles from './Container.module.scss'
import  Search  from './Search/Search'
const cx=classNames.bind(styles)
function Container() {
    return <div className={cx('content') }>
       <div className={cx('header')}>
    Danh sách vé
         </div>
         <Search>
            
         </Search>
    </div>
}

export default Container;