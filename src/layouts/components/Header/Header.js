import classNames from 'classnames/bind';
import styles from './Header.module.scss'
const cx=classNames.bind(styles)
function header() {
    return <header className={cx('wrapper')}></header>
}

export default header;