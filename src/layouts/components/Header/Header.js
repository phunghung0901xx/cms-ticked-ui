import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import Search from './Search/Search'
const cx=classNames.bind(styles)
function header() {
    return <div className={cx('wrapper')}>
        <Search />
    </div>
}

export default header;