import classNames from 'classnames/bind';
import styles from './ListTickedPage.module.scss'
import Search from '../../Search/Search';
import { useState } from 'react';
import React from "react";

import LinkUsed from './ListTickedUsed/LinkUsed'

const cx=classNames.bind(styles);

function ListTickedPage(e) {
        
        const [state, setState]= useState()
       const handleState = () => {
              setState(LinkUsed)
       }
        const [disablebox, setDisablebox] =useState(false);
        const ClickCheckboxTwo = () => {
              setDisablebox(true)
              if(disablebox===true) {
                     setDisablebox(false)
              }
        }
       const [disable,setDisable] = useState(false);
       const ClickCheckbox = () => {
              setDisable(true);
       }
       const [clicked, setClicked] = useState();

       const HandleClick = () => {
           if(true) {
              setClicked('active');
           }
           else
           setClicked('')
       };
       const HandleClicked = () => {
              if(true) {
                     setClicked('');
              }
       }
      const HandleLink = () => {
       setState(LinkUsed)
      }
    return <div className={cx('content') }>
      
       <div className={cx('header')}>
    Danh sách vé
         </div>
         <button onClick={HandleClick} className={cx("button", "x")} >
        <span className={cx("button-text")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
<path d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Lọc vé</span>
      </button>
      <button className={cx("button-2")} >
        <span className={cx("button-text")}>
       Xuất file (.csv)</span>
      </button>
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
    <div className={cx('content-button', `${clicked}`)}>
         <div className={cx('button--header__text')}>Lọc vé</div>
         <div className={cx('date-text--one')}>Từ ngày</div>
         <div className={cx('date-text--button')}>
              <div >
        <span className={cx('calendar--text')}>01/04/2021</span> <svg className={cx('calendar--icon')}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#FF993C"/>
</svg>
              </div>
         </div>
         <div className={cx('date-text--two')}>Đến ngày</div>
         <div className={cx('date-text--button__two')}>
         <span className={cx('calendar--text')}>01/04/2021</span>  <svg className={cx('calendar--icon__two')}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#FF993C"/>
</svg>

<div className={cx('status--text')}>Tình trạng sử dụng
 <input onClick= {ClickCheckbox} type="radio" id={cx("all")} name="all"  value="Tất cả">
 </input>
 <span className={cx("radio--text--two")}>Đã sử dụng</span>
 <input onClick={ HandleLink} type="radio" id={cx("all--two")} disabled= {disable} >
 </input>
 <span className={cx("radio--text--three")}>Chưa sử dụng</span>
 <input type="radio" id={cx("all--three")} disabled= {disable} >
 </input>
 <span className={cx("radio--text--four")}>Hết hạn</span>
 <input type="radio" id={cx("all--four")} disabled= {disable}>
 </input>
 <span className={cx("radio--text")}>Tất cả</span>
 <div className={cx('checkin')}>
       <span className={cx('checkin--text')}>Cổng Check - in</span>
       <input onClick={ClickCheckboxTwo} type="checkbox" id={cx("check--all")} name="Tất cả" value="Tất cả" ></input>
              <label for="Tất cả" className={cx('checkbox--one')}>Tất cả</label>
           <input  type="checkbox" id={cx("check--all__two")} name="Cổng 1" disabled= {disablebox} value="Cổng 1"></input> 
              <label for="Cổng 1" className={cx('checkbox--two')}>Cổng 1</label>
              <input onClick= {handleState}  onChange={handleState}  type="checkbox" id={cx("check--all__three")} name="Cổng 2" disabled= {disablebox} value="Cổng 2"></input>
              <label for="Cổng 2" className={cx('checkbox--three')}>Cổng 2</label>
            <input type="checkbox" id={cx("check--all__four")} name="Cổng 3" disabled= {disablebox} value="Cổng 3"></input>
              <label for="Cổng 3" className={cx('checkbox--four')}>Cổng 3</label>
              <input type="checkbox" id={cx("check--all__five")} name="Cổng 4" disabled= {disablebox} value="Cổng 3"></input>
              <label for="Cổng 4" className={cx('checkbox--five')}>Cổng 4</label>
              <input type="checkbox" id={cx("check--all__six")} name="Cổng 5" disabled= {disablebox}  value="Cổng 5"></input>
              <label for="Cổng 5" className={cx('checkbox--six')}>Cổng 5</label>

              <button onClick={HandleClicked}  className={cx('checkbox--button')}> <span className={cx("btn-default")}>Lọc</span> </button>

 </div>
</div>   
 
         </div>
</div>
</div>
}

export default ListTickedPage;
