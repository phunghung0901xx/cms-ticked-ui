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
               <div className={cx('container')}>
               <div className={cx('container-grow')}>
                <span className={cx('text-1')}>STT</span>
                <span className={cx('text-2')}>Booking code</span>
                <span className={cx('text-3')}>Số vé</span>
                <span className={cx('text-4')}>Tên sự kiện</span>
                <span className={cx('text-5')}>Tình trạng sử dụng</span>
                <span className={cx('text-6')}>Ngày sử dụng</span>
                <span className={cx('text-7')}>Ngày xuất vé</span>
                <span className={cx('text-8')}>Cổng check - in</span>
               </div>
               <div className={cx('container-grow__1')}>
                <div className={cx('grow-text__1')}>1</div>
                <div className={cx('grow-text__2')}>ALT20210501</div>
                <div className={cx('grow-text__3')}>123456789034</div>
                <div className={cx('grow-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
                <div className={cx('grow-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
                <div className={cx('grow-text__6')}>14/04/2021</div>
                <div className={cx('grow-text__7')}>14/04/2021</div>
                <div className={cx('grow-text__8')}>Cổng 1</div>

         </div>
         <div className={cx('container-grow__2')}> 
        
                <div className={cx('grow__2-text__1')}>2</div>
                <div className={cx('grow__2-text__2')}>ALT20210501</div>
                <div className={cx('grow__2-text__3')}>236784631642</div>
                <div className={cx('grow__2-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
                <div className={cx('grow__2-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
                <div className={cx('grow__2-text__6')}>14/04/2021</div>
                <div className={cx('grow__2-text__7')}>14/04/2021</div>
                <div className={cx('grow__2-text__8')}>Cổng 1</div>

         </div>
         <div className={cx('container-grow__3')}> 
        
                <div className={cx('grow__3-text__1')}>3</div>
                <div className={cx('grow__3-text__2')}>ALT20210501</div>
                <div className={cx('grow__3-text__3')}>487621489474</div>
                <div className={cx('grow__3-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
                <div className={cx('grow__3-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
                <div className={cx('grow__3-text__6')}>14/04/2021</div>
                <div className={cx('grow__3-text__7')}>14/04/2021</div>
                <div className={cx('grow__3-text__8')}>Cổng 1</div>

         </div>
         <div className={cx('container-grow__4')}> 
        
                <div className={cx('grow__4-text__1')}>4</div>
                <div className={cx('grow__4-text__2')}>ALT20210501</div>
                <div className={cx('grow__4-text__3')}>201649631896</div>
                <div className={cx('grow__4-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
                <div className={cx('grow__4-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
                <div className={cx('grow__4-text__6')}>14/04/2021</div>
                <div className={cx('grow__4-text__7')}>14/04/2021</div>
                <div className={cx('grow__4-text__8')}>Cổng 1</div>

         </div>
         
         <div className={cx('container-grow__5')}> 
        
        <div className={cx('grow__5-text__1')}>5</div>
        <div className={cx('grow__5-text__2')}>ALT20210501</div>
        <div className={cx('grow__5-text__3')}>201649631896</div>
        <div className={cx('grow__5-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
        <div className={cx('grow__5-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
        <circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
        </svg>Chưa sử dụng</div>
        <div className={cx('grow__5-text__6')}>14/04/2021</div>
        <div className={cx('grow__5-text__7')}>14/04/2021</div>
        <div className={cx('grow__5-text__8')}>Cổng 1</div>
        
        </div>
        
        <div className={cx('container-grow__6')}> 

<div className={cx('grow__6-text__1')}>6</div>
<div className={cx('grow__6-text__2')}>ALT20210501</div>
<div className={cx('grow__6-text__3')}>148920121478</div>
<div className={cx('grow__6-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
<div className={cx('grow__6-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
<div className={cx('grow__6-text__6')}>14/04/2021</div>
<div className={cx('grow__6-text__7')}>14/04/2021</div>
<div className={cx('grow__6-text__8')}>Cổng 1</div>

</div>
<div className={cx('container-grow__7')}> 

<div className={cx('grow__7-text__1')}>7</div>
<div className={cx('grow__7-text__2')}>ALT20210501</div>
<div className={cx('grow__7-text__3')}>654115684899</div>
<div className={cx('grow__7-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
<div className={cx('grow__7-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
<div className={cx('grow__7-text__6')}>14/04/2021</div>
<div className={cx('grow__7-text__7')}>14/04/2021</div>
<div className={cx('grow__7-text__8')}>Cổng 1</div>

</div>
<div className={cx('container-grow__8')}> 

<div className={cx('grow__8-text__1')}>8</div>
<div className={cx('grow__8-text__2')}>ALT20210501</div>
<div className={cx('grow__8-text__3')}>205465031465</div>
<div className={cx('grow__8-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
<div className={cx('grow__8-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
<div className={cx('grow__8-text__6')}>14/04/2021</div>
<div className={cx('grow__8-text__7')}>14/04/2021</div>
<div className={cx('grow__8-text__8')}>Cổng 1</div>

</div>
<div className={cx('container-grow__9')}> 

<div className={cx('grow__9-text__1')}>9</div>
<div className={cx('grow__9-text__2')}>ALT20210501</div>
<div className={cx('grow__9-text__3')}>894648474910</div>
<div className={cx('grow__9-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
<div className={cx('grow__9-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
<div className={cx('grow__9-text__6')}>14/04/2021</div>
<div className={cx('grow__9-text__7')}>14/04/2021</div>
<div className={cx('grow__9-text__8')}>Cổng 1</div>

</div>
<div className={cx('container-grow__10')}> 

<div className={cx('grow__10-text__1')}>10</div>
<div className={cx('grow__10-text__2')}>ALT20210501</div>
<div className={cx('grow__10-text__3')}>894875101400</div>
<div className={cx('grow__10-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
<div className={cx('grow__10-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
<div className={cx('grow__10-text__6')}>14/04/2021</div>
<div className={cx('grow__10-text__7')}>14/04/2021</div>
<div className={cx('grow__10-text__8')}>Cổng 1</div>

</div>


<div className={cx('container-grow__11')}> 

<div className={cx('grow__11-text__1')}>11</div>
<div className={cx('grow__11-text__2')}>ALT20210501</div>
<div className={cx('grow__11-text__3')}>205314876321</div>
<div className={cx('grow__11-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
<div className={cx('grow__11-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
<div className={cx('grow__11-text__6')}>14/04/2021</div>
<div className={cx('grow__11-text__7')}>14/04/2021</div>
<div className={cx('grow__11-text__8')}>Cổng 1</div>

</div>
         
<div className={cx('container-grow__12')}> 

<div className={cx('grow__12-text__1')}>12</div>
<div className={cx('grow__12-text__2')}>ALT20210501</div>
<div className={cx('grow__12-text__3')}>185653100147</div>
<div className={cx('grow__12-text__4')}>Hội chợ triễn lảm tiêu dùng 2021</div>
<div className={cx('grow__12-text__5')}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
<circle cx="4.5" cy="4.5" r="4" fill="#03AC00"/>
</svg>Chưa sử dụng</div>
<div className={cx('grow__12-text__6')}>14/04/2021</div>
<div className={cx('grow__12-text__7')}>14/04/2021</div>
<div className={cx('grow__12-text__8')}>Cổng 1</div>

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
              
</div>
}

export default Container;