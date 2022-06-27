import classNames from 'classnames/bind';
import styles from './Search.module.scss'

const cx=classNames.bind(styles)
function Search() {
    return <div className={cx('search')}>
        <input type="text" className={cx('text')} placeholder="Search"></input>
        <div className={cx('svg-list')}>
        <svg className={cx('svg')}  xmlns= "http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g opacity="0.8">
<path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#1E0D03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 6L12 13L2 6" stroke="#1E0D03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
<svg className={cx("svg-1")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g opacity="0.8">
<path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1E0D03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1E0D03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
   <div className={cx("img")}></div>
</div>
    </div>
}

export default Search;