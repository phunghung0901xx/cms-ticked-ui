import classNames from 'classnames/bind';
import styles from './Uncontested.module.scss'

const cx=classNames.bind(styles);
function Uncontested() {
    return (
      
    <div className={cx('Container') }>
       <div className={cx('header')}>
        <span className={cx('header--text')}>Đối soát vé</span>
       
        <input type="text"  className={cx('text')} placeholder="Tìm bằng số vé" />
        <svg className={cx("input-icon")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M23.7067 22.2937L16.8818 15.4688C18.2038 13.8358 18.9998 11.7608 18.9998 9.50083C18.9998 4.26289 14.7378 0.000915527 9.49986 0.000915527C4.26192 0.000915527 0 4.26284 0 9.50078C0 14.7387 4.26197 19.0007 9.49991 19.0007C11.7599 19.0007 13.8349 18.2047 15.4678 16.8827L22.2928 23.7076C22.4878 23.9026 22.7437 24.0007 22.9998 24.0007C23.2558 24.0007 23.5118 23.9026 23.7068 23.7076C24.0978 23.3167 24.0978 22.6847 23.7067 22.2937ZM9.49991 17.0007C5.36394 17.0007 1.99999 13.6368 1.99999 9.50078C1.99999 5.36481 5.36394 2.00086 9.49991 2.00086C13.6359 2.00086 16.9998 5.36481 16.9998 9.50078C16.9998 13.6368 13.6358 17.0007 9.49991 17.0007Z" fill="#1E0D03"/>
</svg>
        
        <button className={cx('button')}>Xuất file(.csv) </button>
        
       </div>
       <div className={cx('content')}>
       <div className={cx('content--1__row')}>
       <div className={cx('grow-text__1')}>STT</div>
                <div className={cx('grow-text__2')}>Số vé</div>
                <div className={cx('grow-text__3')}>Tên sự kiện</div>
                <div className={cx('grow-text__4')}>Ngày sử dụng</div>
                <div className={cx('grow-text__5')}>Loại vé </div>
                <div className={cx('grow-text__6')}>Cổng check - in</div>
            
       </div>
       <div className={cx('content--2__row')}>
       <div className={cx('grow__2-text__1')}>1</div>
                <div className={cx('grow__2-text__2')}>205314876321</div>
                <div className={cx('grow__2-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
                <div className={cx('grow__2-text__4')}>14/04/2021</div>
                <div className={cx('grow__2-text__5')}>Vé cổng</div>
                <div className={cx('grow__2-text__6')}>Cổng 1</div>
                <div className={cx('grow__2-text__7')}> Đã đối soát</div>
       </div>
       <div className={cx('content--3__row')}>
     
        <div className={cx('grow__3-text__1')}>2</div>
        <div className={cx('grow__3-text__2')}> 205314801225 </div>
        <div className={cx('grow__3-text__3')}> Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__3-text__4')}>14/04/2021</div>
        <div className={cx('grow__3-text__5')}>Vé cổng</div>
        <div className={cx('grow__3-text__6')}> Cổng 1</div>
        <div className={cx('grow__3-text__7')}>Đã đối soát</div>
        

 
       </div>
       <div className={cx('content--4__row')}>
       <div className={cx('grow__4-text__1')}>3</div>
                <div className={cx('grow__4-text__2')}>205314897452</div>
                <div className={cx('grow__4-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
                <div className={cx('grow__4-text__4')}>14/04/2021</div>
                <div className={cx('grow__4-text__5')}>Vé cổng</div>
                <div className={cx('grow__4-text__6')}>Cổng 1</div>
                <div className={cx('grow__4-text__7')}>Đã đối soát</div>
                
       </div>
       <div className={cx('content-5__row')}> 
       <div className={cx('grow__5-text__1')}>4</div>
        <div className={cx('grow__5-text__2')}>205314821403</div>
        <div className={cx('grow__5-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__4')}>14/04/2021</div>
        <div className={cx('grow__5-text__5')}>Vé cổng </div>
        <div className={cx('grow__5-text__6')}>Cổng 1</div>
        <div className={cx('grow__5-text__7')}>Đã đối soát </div>
       
       </div>
       <div className={cx('content-6__row')}> 
       <div className={cx('grow__5-text__1')}>5</div>
       <div className={cx('grow__5-text__2')}>205314860215</div>
        <div className={cx('grow__5-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__4')}>14/04/2021</div>
        <div className={cx('grow__5-text__5')}>Vé cổng </div>
        <div className={cx('grow__5-text__6')}>Cổng 1</div>
        <div className={cx('grow__5-text__7')}>Đã đối soát </div>
       
       </div>
       <div className={cx('content-7__row')}> 
       <div className={cx('grow__5-text__1')}>6</div>
       <div className={cx('grow__5-text__2')}>205314830221</div>
        <div className={cx('grow__5-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__4')}>14/04/2021</div>
        <div className={cx('grow__5-text__5')}>Vé cổng </div>
        <div className={cx('grow__5-text__6')}>Cổng 1</div>
        <div className={cx('grow__5-text__7')}>Đã đối soát </div>
       
       </div>
       <div className={cx('content-8__row')}> 
       <div className={cx('grow__5-text__1')}>7</div>
       <div className={cx('grow__5-text__2')}>205314876321</div>
        <div className={cx('grow__5-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__4')}>14/04/2021</div>
        <div className={cx('grow__5-text__5')}>Vé cổng </div>
        <div className={cx('grow__5-text__6')}>Cổng 1</div>
        <div className={cx('grow__5-text__7')}>Đã đối soát </div>
       
       </div>
       <div className={cx('content-9__row')}> 
       <div className={cx('grow__5-text__1')}>8</div>
       <div className={cx('grow__5-text__2')}>205465031465</div>
        <div className={cx('grow__5-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__4')}>14/04/2021</div>
        <div className={cx('grow__5-text__5')}>Vé cổng </div>
        <div className={cx('grow__5-text__6')}>Cổng 1</div>
        <div className={cx('grow__5-text__7')}>Đã đối soát </div>
       
       </div>
       <div className={cx('content-10__row')}> 
       <div className={cx('grow__5-text__1')}>9</div>
       <div className={cx('grow__5-text__2')}>102342147541</div>
        <div className={cx('grow__5-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__4')}>14/04/2021</div>
        <div className={cx('grow__5-text__5')}>Vé cổng </div>
        <div className={cx('grow__5-text__6')}>Cổng 1</div>
        <div className={cx('grow__5-text__7')}>Đã đối soát </div>
       
       </div>
       <div className={cx('content-11__row')}> 
       <div className={cx('grow__5-text__1')}>10</div>
       <div className={cx('grow__5-text__2')}>521463258547</div>
        <div className={cx('grow__5-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__4')}>14/04/2021</div>
        <div className={cx('grow__5-text__5')}>Vé cổng </div>
        <div className={cx('grow__5-text__6')}>Cổng 1</div>
        <div className={cx('grow__5-text__7')}>Đã đối soát </div>
       
       </div>
       <div className={cx('content-12__row')}> 
       <div className={cx('grow__5-text__1')}>11</div>
       <div className={cx('grow__5-text__2')}>102541276932</div>
        <div className={cx('grow__5-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__4')}>14/04/2021</div>
        <div className={cx('grow__5-text__5')}>Vé cổng </div>
        <div className={cx('grow__5-text__6')}>Cổng 1</div>
        <div className={cx('grow__5-text__7')}>Đã đối soát </div>
       
       </div>
       <div className={cx('content-13__row')}> 
       <div className={cx('grow__5-text__1')}>12</div>
       <div className={cx('grow__5-text__2')}>157634952014</div>
        <div className={cx('grow__5-text__3')}>Hội chợ triển lãm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__4')}>14/04/2021</div>
        <div className={cx('grow__5-text__5')}>Vé cổng </div>
        <div className={cx('grow__5-text__6')}>Cổng 1</div>
        <div className={cx('grow__5-text__7')}>Đã đối soát </div>
       
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

export default Uncontested;
