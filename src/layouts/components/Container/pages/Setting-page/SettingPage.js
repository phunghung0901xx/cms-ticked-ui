import classNames from 'classnames/bind';
import styles from './SettingPage.module.scss'
import Search from '../../Search/Search'
import React from 'react';
import {useState} from 'react'

const cx=classNames.bind(styles)
function Container() {
    const [add,setAdd] = useState()
    const [click,setClick]= useState()
    const handleAdd = () => {
        setAdd('addpage')
    }
    const handleAddCancled = () => {
        setAdd('')
    }
    const handleClick= () => {
       
        setClick('active')
        
        
   }
   const handleSave= () => {
       
    setClick('')
    
    
}

    return (
    <div className={cx('settingPage') }>
        <div className={cx(`${add}`,"none")}>
            <span className={cx("add-header")}>Thêm gói vé</span>
            <div className={cx("add--name__ticked")}>Tên gói vé <svg  className={cx("star")}   xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
<path d="M4.576 3.2L6.4 4.208L5.776 5.296L3.92 4.208L3.936 6.272H2.72L2.736 4.224L0.896 5.296L0.256 4.208L2.096 3.2L0.256 2.192L0.896 1.088L2.736 2.176L2.72 0.127999H3.936L3.92 2.192L5.776 1.088L6.4 2.192L4.576 3.2Z" fill="#FD5959"/>
</svg></div>
<div className={cx('add--ticked__block')}> 
       <input type="text"  className={cx("add--ticked__name")}  placeholder="Nhập tên gói vé"/>
       </div>
        <div className={cx('applicaple--date')}>Ngày áp dụng</div>
        <div className={cx('applicaple--date__block')}>
            <input type="text"  placeholder="dd/mm/yy" className={cx('applicate--date')}/><svg  className={cx("add--ticked__icon")} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#FF993C"/>
</svg>
        </div>
        <div className={cx('applicaple--time__block')}>
            <input type="text"  placeholder="hh:mm:ss" className={cx('applicate--time')}/><svg  className={cx("add--ticked__icon")}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13 9H11V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9 10.2652 9.10536 10.5196 9.2929 10.7071C9.48043 10.8946 9.73479 11 10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z" fill="#FF993C"/>
</svg>
        </div>
        <div className={cx('expried--date')}>Ngày hết hạn</div>
        <div className={cx('expried--date__block')}>
            <input type="text"  placeholder="dd/mm/yy" className={cx('applicate--date')}/><svg  className={cx("add--ticked__icon")} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#FF993C"/>
</svg>
        </div>
        <div className={cx('expried--time__block')}>
            <input type="text"  placeholder="hh:mm:ss" className={cx('applicate--time')}/><svg  className={cx("add--ticked__icon")}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13 9H11V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9 10.2652 9.10536 10.5196 9.2929 10.7071C9.48043 10.8946 9.73479 11 10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z" fill="#FF993C"/>
</svg>
        </div>
        <div className={cx('applicaple--ticked__price')}>
        Giá vé áp dụng
             </div>
             <div className={cx('applicaple--ticked__price--content')}>  
        <input type="checkbox" className={cx('checkbox-applicaple')} />
        <div className={cx('content--odd')}> Vé lẻ (vnđ/vé) với giá</div>
        <input type="text" className={cx('text--odd')}  placeholder="giá vé"/>
         <span className={cx('dotsec')}>/ vé </span>
        </div>
        <div className={cx('applicaple--ticked__price--content__combo')}> 
        <input type="checkbox" className={cx('checkbox-applicaple')} />
        <div className={cx('content--odd')}>Combo vé với giá</div>
        <input type="text" className={cx('text--odd__combo')}  placeholder="giá vé"/>
        <span className={cx('dotsecs')}>/</span>
        <input type="text" className={cx('text--price__combo')}  placeholder="giá vé"/>
        <span className={cx('dotsecss')}>vé</span>

         </div>
         <span className={cx('status--add')}>Tình trạng</span>
         <div className={cx('status--add__block')}>
         Đang áp dụng <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
<path d="M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99806 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99806 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z" fill="#FF993C"/>
</svg>

         </div>
         <span className={cx('status--add__info')}><svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
<path d="M4.576 3.2L6.4 4.208L5.776 5.296L3.92 4.208L3.936 6.272H2.72L2.736 4.224L0.896 5.296L0.256 4.208L2.096 3.2L0.256 2.192L0.896 1.088L2.736 2.176L2.72 0.127999H3.936L3.92 2.192L5.776 1.088L6.4 2.192L4.576 3.2Z" fill="#FD5959"/>
</svg>là thông tin bắt buộc</span>
<div className={cx('save--cancel')}> 
<button   onClick={handleAddCancled} className={cx('cancel--button__add')}>
    Hủy
</button>
<button className={cx('save--button__add')}>
    Lưu
</button>
</div>
        </div>
        <div className={cx(`${click}`,"none")}>
             <div className={cx('setting-header__text')}>Cập nhật thông tin gói vé</div>
             <div className={cx('header__text--code')}>Mã sự kiện</div>
             <div className={cx('header__text--name')}>Tên sự kiện</div>
             <div className={cx('text--code__content')}>
                <span className={cx('code--content__text')}>PKG20210502</span>
             </div>
             <div className={cx('event--name')}>
                <span className={cx('event--name__text')}>Hội chợ triển lãm hàng tiêu dùng 2021</span>
             </div>
             <span className={cx('event--date')}>Ngày áp dụng</span>
             <div className={cx('event--date__text')}>
                  <div className={cx('event--date__notice')}>    <span className={cx('event--notice__text')}>01/04/2021</span>
                  <svg  className={cx('date--notice__icon')} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#FF993C"/>
</svg>      
                  </div>
             </div>
             <div className={cx('date--time')}> 
             <span className={cx('date--time__text')}> 
             08:00:00
             </span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13 9H11V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9 10.2652 9.10536 10.5196 9.2929 10.7071C9.48043 10.8946 9.73479 11 10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z" fill="#FF993C"/>
</svg>
             </div>
             <div className={cx('date--expires')}>
                Ngày hết hạn
                <div className={cx('date--expires__notice')}>
                <div className={cx('date--expires__text')}>01/04/2021</div><svg className={cx('date--expires__icon')} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#FF993C"/>
</svg>
                </div>
                <div className={cx('date--expries__time')}> 
                <div className={cx('expries__time--notice')}> 
                08:00:00 <svg className={cx('date--expries__time--icon')}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13 9H11V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9 10.2652 9.10536 10.5196 9.2929 10.7071C9.48043 10.8946 9.73479 11 10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z" fill="#FF993C"/>
</svg>
                </div>
                </div>
             </div>
               <div className={cx("price--ticked")}>Giá vé áp dụng
              
               </div>
               <div className={cx('price--ticked__notice')}>
                <input type="checkbox" className={cx("checkbox--price")}/>
                <div className={cx('price--ticked__text')}>Vé lẻ (vnđ/vé) với giá </div>
                <input type="text" placeholder="Giá vé" className={cx("text--price")}/>
                <span className={cx("textdot")}>/ vé</span>
               </div>
               <div className={cx('combo--ticked__notice')}> 
               <input type="checkbox" className={cx("checkbox--combo")}/>
               <div className={cx('combo--ticked__text')}>Combo vé với giá </div>
               <input type="text" placeholder="Giá vé" className={cx("text--price")}/>
               <span className={cx("textdot")}>/</span>
               <input type="text" placeholder="Giá vé" className={cx("combo--price")}/>
               <span className={cx("textdots")}>vé</span>

               </div>
               <div className={cx("status--ticked")}>Tình trạng</div>
               <div className={cx("status--ticked--notice")}>
               <div className={cx("status--ticked--notice__text")}>Đang áp dụng <svg className={cx("textdotss")}  xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
<path d="M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99806 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99806 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z" fill="#FF993C"/>
</svg></div>
               </div>
               <div className={cx("info--text")}><svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
<path d="M4.576 3.2L6.4 4.208L5.776 5.296L3.92 4.208L3.936 6.272H2.72L2.736 4.224L0.896 5.296L0.256 4.208L2.096 3.2L0.256 2.192L0.896 1.088L2.736 2.176L2.72 0.127999H3.936L3.92 2.192L5.776 1.088L6.4 2.192L4.576 3.2Z" fill="#FD5959"/>
</svg> là thông tin bắt buộc</div>
<div className={cx("button--text__ticked")}>
        <button onClick={handleSave} className={cx("button--cancel")}>Hủy</button>
        <button className={cx("button--save")}>Lưu</button>
        </div>
        </div>
     
        <buttton className={cx('button--text')}>
        Xuất file (.csv)
        </buttton>
        <buttton onClick={handleAdd}  className={cx('button--text__add')}>
        Thêm gói vé
        </buttton>

        <div className={cx('header')}>
           <span className={cx('header-text')}>Danh sách gói vé</span>
           <Search />
        </div>
        <div className={cx('content')} >
            <div className={cx('natBar__row')}>
                <span className={cx('natBar--text-1')}>STT</span>
                <span className={cx('natBar--text-2')}>Mã gói</span>
                <span className={cx('natBar--text-3')}>Tên gói vé</span>
                <span className={cx('natBar--text-4')}>Ngày áp dụng</span>
                <span className={cx('natBar--text-5')}>Ngày hết hạn</span>
                <span className={cx('natBar--text-6')}>Gía vé(VND/Vé)</span>
                <span className={cx('natBar--text-7')}>Gía Combo(VND/Combo)</span>
                <span className={cx('natBar--text-8')}>Tình trạng</span>
                 </div>
                 <div className={cx('natBar__row-1')}>
                <span className={cx('row--text-1')}>1</span>
                <span className={cx('row--text-2')}>ALT20210501</span>
                <span className={cx('row--text-3')}>Gói gia đình</span>
                <span className={cx('row--text-4')}>14/04/2021 08:00:00</span>
                <span className={cx('row--text-5')}>14/04/2021 23:00:00</span>
                <span className={cx('row--text-6')}>90.000 VNĐ</span>
                <span className={cx('row--text-7')}>360.000 VNĐ/4 Vé</span>
                <span className={cx('row--text-8')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#03AC00"/>
</svg>Đang áp dụng</span>
<span  onClick={handleClick} className={cx('row--text-9')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Cập nhập</span>
                 </div>
                 <div className={cx('natBar__row-2')}>
                <span className={cx('row--2-text-1')}>2</span>
                <span className={cx('row--2-text-2')}>ALT20210501</span>
                <span className={cx('row--2-text-3')}>Gói sự kiện</span>
                <span className={cx('row--2-text-4')}>14/04/2021 08:00:00</span>
                <span className={cx('row--2-text-5')}>14/04/2021 23:00:00</span>
                <span className={cx('row--2-text-6')}>20.000 VNĐ</span>
                <span className={cx('row--2-text-7')}></span>
                <span className={cx('row--2-text-8')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<circle cx="4" cy="4.5" r="4" fill="#FD5959"/>
</svg>Tắt</span>
<span onClick={handleClick} className={cx('row--text-9')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Cập nhập</span>
                 </div>
                 
           
        </div>
        <div className= {cx('footer')}>
       <span className={cx('footer__text')}>
       <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
<path d="M7.3642 10C7.24552 10 7.12854 9.96609 7.02511 9.90002L0.297552 5.5521C0.112748 5.43212 -2.28363e-07 5.22433 -2.18558e-07 5.00002C-2.08753e-07 4.77572 0.112748 4.56793 0.297552 4.44795L7.02511 0.100029C7.22094 -0.0260359 7.46848 -0.0338606 7.67108 0.0817709C7.87454 0.196533 8 0.414755 8 0.652104L8 9.34794C8 9.58529 7.87454 9.80351 7.67108 9.91828C7.57529 9.97305 7.46932 10 7.3642 10Z" fill="#A5A8B1"/>
</svg>
       </span>
       <span className={cx('footer__text--1')}> 1</span>
       <span className={cx('footer__text--2')}> 2</span>
       <span className={cx('footer__text--3')}> 3</span>
       <span className={cx('footer__text--4')}> 4</span>
       <span className={cx('footer__text--5')}> 5</span>
       <span className={cx('footer__text--6')}> ...</span>
       <span className={cx('footer__text--7')}> 20</span>
       <span className={cx('footer__text--8')}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
<path d="M0.635796 10C0.754477 10 0.871464 9.96609 0.974887 9.90002L7.70245 5.5521C7.88725 5.43212 8 5.22433 8 5.00002C8 4.77572 7.88725 4.56793 7.70245 4.44795L0.974886 0.100029C0.779061 -0.0260359 0.531525 -0.0338606 0.328918 0.0817709C0.125464 0.196533 1.81295e-08 0.414755 2.85044e-08 0.652104L4.08612e-07 9.34794C4.18986e-07 9.58529 0.125464 9.80351 0.328919 9.91828C0.424712 9.97305 0.530678 10 0.635796 10Z" fill="#FF993C"/>
</svg> </span>
  </div>
  </div> 


    )
}

export default Container;