import classNames from 'classnames/bind';
import styles from './Search.module.scss'
const cx=classNames.bind(styles)
function Search() {
    return <div className={cx('content') }>
      <div className={cx("search")}>
          <div className={cx("input")}>
          <input type="text" className="text" placeholder="Tìm bằng số vé"/>
          </div>
      </div>
    </div>
}

export default Search;