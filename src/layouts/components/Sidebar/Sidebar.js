import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
const cx=classNames.bind(styles)
function Sidebar() {
    return <div className={cx('sidebar')}>
        <div className={cx('img')}></div>
        <div className={cx('menu')}>
          
<div className={cx('menu-column')}>
                <svg className={cx('icon-1')} xmlns="http://www.w3.org/2000/svg" width="18" height="20.02" top="1.98" left = "3"viewBox="0 0 18 20.02" fill="none">
<path d="M17 7.00001L11 1.74001C10.45 1.24805 9.7379 0.976074 8.99997 0.976074C8.26204 0.976074 7.54999 1.24805 6.99997 1.74001L0.999973 7.00001C0.682341 7.28408 0.428873 7.63256 0.256445 8.02225C0.0840165 8.41194 -0.00341463 8.83389 -2.72762e-05 9.26001V18C-2.72762e-05 18.7957 0.316043 19.5587 0.878652 20.1213C1.44126 20.6839 2.20432 21 2.99997 21H15C15.7956 21 16.5587 20.6839 17.1213 20.1213C17.6839 19.5587 18 18.7957 18 18V9.25001C18.0019 8.82557 17.9138 8.40555 17.7414 8.01769C17.5691 7.62983 17.3163 7.28296 17 7.00001ZM11 19H6.99997V14C6.99997 13.7348 7.10533 13.4804 7.29287 13.2929C7.4804 13.1054 7.73476 13 7.99997 13H9.99997C10.2652 13 10.5195 13.1054 10.7071 13.2929C10.8946 13.4804 11 13.7348 11 14V19ZM16 18C16 18.2652 15.8946 18.5196 15.7071 18.7071C15.5195 18.8946 15.2652 19 15 19H13V14C13 13.2044 12.6839 12.4413 12.1213 11.8787C11.5587 11.3161 10.7956 11 9.99997 11H7.99997C7.20432 11 6.44126 11.3161 5.87865 11.8787C5.31604 12.4413 4.99997 13.2044 4.99997 14V19H2.99997C2.73476 19 2.4804 18.8946 2.29287 18.7071C2.10533 18.5196 1.99997 18.2652 1.99997 18V9.25001C2.00015 9.10802 2.03057 8.9677 2.08919 8.83839C2.14781 8.70907 2.2333 8.59372 2.33997 8.50001L8.33997 3.25001C8.52246 3.08969 8.75706 3.00127 8.99997 3.00127C9.24288 3.00127 9.47748 3.08969 9.65997 3.25001L15.66 8.50001C15.7666 8.59372 15.8521 8.70907 15.9108 8.83839C15.9694 8.9677 15.9998 9.10802 16 9.25001V18Z" fill="#1E0D03"/>
</svg> <span className={cx("text")}>Trang chủ</span>
</div>  
<div className={cx('menu-column')}>
<svg className={cx('icon-2')} xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
<path d="M7 5C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6V8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9C7.26522 9 7.51957 8.89464 7.70711 8.70711C7.89464 8.51957 8 8.26522 8 8V6C8 5.73478 7.89464 5.48043 7.70711 5.29289C7.51957 5.10536 7.26522 5 7 5ZM19 6C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6C1.26522 6 1.51957 6.10536 1.70711 6.29289C1.89464 6.48043 2 6.73478 2 7C2 7.26522 1.89464 7.51957 1.70711 7.70711C1.51957 7.89464 1.26522 8 1 8C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H19C19.2652 14 19.5196 13.8946 19.7071 13.7071C19.8946 13.5196 20 13.2652 20 13V9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8C18.7348 8 18.4804 7.89464 18.2929 7.70711C18.1054 7.51957 18 7.26522 18 7C18 6.73478 18.1054 6.48043 18.2929 6.29289C18.4804 6.10536 18.7348 6 19 6ZM18 4.18C17.4208 4.3902 16.9205 4.77363 16.5668 5.27816C16.2132 5.7827 16.0235 6.38388 16.0235 7C16.0235 7.61612 16.2132 8.2173 16.5668 8.72184C16.9205 9.22637 17.4208 9.6098 18 9.82V12H8C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12H2V9.82C2.57915 9.6098 3.07954 9.22637 3.43316 8.72184C3.78678 8.2173 3.97648 7.61612 3.97648 7C3.97648 6.38388 3.78678 5.7827 3.43316 5.27816C3.07954 4.77363 2.57915 4.3902 2 4.18V2H6C6 2.26522 6.10536 2.51957 6.29289 2.70711C6.48043 2.89464 6.73478 3 7 3C7.26522 3 7.51957 2.89464 7.70711 2.70711C7.89464 2.51957 8 2.26522 8 2H18V4.18Z" fill="white"/>
</svg> <span className={cx("text")}>Quản lý vé</span>
</div>
<div className={cx('menu-column')}>
<svg className={cx('icon-3')}   xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M11 14.9999H5.00001C4.73479 14.9999 4.48044 15.1053 4.2929 15.2928C4.10537 15.4804 4.00001 15.7347 4.00001 15.9999C4.00001 16.2652 4.10537 16.5195 4.2929 16.7071C4.48044 16.8946 4.73479 16.9999 5.00001 16.9999H11C11.2652 16.9999 11.5196 16.8946 11.7071 16.7071C11.8947 16.5195 12 16.2652 12 15.9999C12 15.7347 11.8947 15.4804 11.7071 15.2928C11.5196 15.1053 11.2652 14.9999 11 14.9999ZM7.00001 8.99995H9.00001C9.26522 8.99995 9.51958 8.89459 9.70711 8.70705C9.89465 8.51952 10 8.26516 10 7.99995C10 7.73473 9.89465 7.48038 9.70711 7.29284C9.51958 7.1053 9.26522 6.99995 9.00001 6.99995H7.00001C6.73479 6.99995 6.48044 7.1053 6.2929 7.29284C6.10537 7.48038 6.00001 7.73473 6.00001 7.99995C6.00001 8.26516 6.10537 8.51952 6.2929 8.70705C6.48044 8.89459 6.73479 8.99995 7.00001 8.99995ZM19 10.9999H16V1.99995C16.0007 1.82374 15.9548 1.65047 15.867 1.49769C15.7792 1.34491 15.6526 1.21805 15.5 1.12995C15.348 1.04218 15.1755 0.995972 15 0.995972C14.8245 0.995972 14.652 1.04218 14.5 1.12995L11.5 2.84995L8.50001 1.12995C8.34799 1.04218 8.17554 0.995972 8.00001 0.995972C7.82447 0.995972 7.65203 1.04218 7.50001 1.12995L4.50001 2.84995L1.50001 1.12995C1.34799 1.04218 1.17554 0.995972 1.00001 0.995972C0.824471 0.995972 0.652027 1.04218 0.500008 1.12995C0.347404 1.21805 0.220789 1.34491 0.132986 1.49769C0.0451828 1.65047 -0.000691685 1.82374 7.88288e-06 1.99995V17.9999C7.88288e-06 18.7956 0.316078 19.5587 0.878688 20.1213C1.4413 20.6839 2.20436 20.9999 3.00001 20.9999H17C17.7957 20.9999 18.5587 20.6839 19.1213 20.1213C19.6839 19.5587 20 18.7956 20 17.9999V11.9999C20 11.7347 19.8947 11.4804 19.7071 11.2928C19.5196 11.1053 19.2652 10.9999 19 10.9999ZM3.00001 18.9999C2.73479 18.9999 2.48044 18.8946 2.2929 18.7071C2.10536 18.5195 2.00001 18.2652 2.00001 17.9999V3.72995L4.00001 4.86995C4.15435 4.95056 4.32589 4.99266 4.50001 4.99266C4.67413 4.99266 4.84567 4.95056 5.00001 4.86995L8.00001 3.14995L11 4.86995C11.1543 4.95056 11.3259 4.99266 11.5 4.99266C11.6741 4.99266 11.8457 4.95056 12 4.86995L14 3.72995V17.9999C14.0027 18.3411 14.0636 18.6793 14.18 18.9999H3.00001ZM18 17.9999C18 18.2652 17.8947 18.5195 17.7071 18.7071C17.5196 18.8946 17.2652 18.9999 17 18.9999C16.7348 18.9999 16.4804 18.8946 16.2929 18.7071C16.1054 18.5195 16 18.2652 16 17.9999V12.9999H18V17.9999ZM11 10.9999H5.00001C4.73479 10.9999 4.48044 11.1053 4.2929 11.2928C4.10537 11.4804 4.00001 11.7347 4.00001 11.9999C4.00001 12.2652 4.10537 12.5195 4.2929 12.7071C4.48044 12.8946 4.73479 12.9999 5.00001 12.9999H11C11.2652 12.9999 11.5196 12.8946 11.7071 12.7071C11.8947 12.5195 12 12.2652 12 11.9999C12 11.7347 11.8947 11.4804 11.7071 11.2928C11.5196 11.1053 11.2652 10.9999 11 10.9999Z" fill="#1E0D03"/>
</svg> <span className={cx("text")}>Đối soát vé</span>
</div>
<div className={cx('menu-column')}>
<svg   className={cx('icon-4')}xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
<path d="M18.9 11.66C18.7397 11.4775 18.6513 11.2429 18.6513 11C18.6513 10.7571 18.7397 10.5225 18.9 10.34L20.18 8.90002C20.3211 8.74269 20.4087 8.54472 20.4302 8.33452C20.4518 8.12433 20.4062 7.9127 20.3 7.73002L18.3 4.27002C18.1949 4.08754 18.0349 3.94289 17.8428 3.8567C17.6506 3.77051 17.4362 3.74718 17.23 3.79002L15.35 4.17002C15.1108 4.21945 14.8618 4.17961 14.6499 4.05802C14.438 3.93643 14.278 3.7415 14.2 3.51002L13.59 1.68002C13.5229 1.4814 13.3951 1.30888 13.2246 1.18686C13.0542 1.06484 12.8497 0.999476 12.64 1.00002H8.64002C8.42195 0.988635 8.20615 1.04894 8.02558 1.17173C7.84501 1.29452 7.7096 1.47304 7.64002 1.68002L7.08002 3.51002C7.00202 3.7415 6.84199 3.93643 6.63013 4.05802C6.41827 4.17961 6.16924 4.21945 5.93002 4.17002L4.00002 3.79002C3.80457 3.7624 3.60532 3.79324 3.42737 3.87866C3.24941 3.96407 3.10072 4.10025 3.00002 4.27002L1.00002 7.73002C0.891178 7.91067 0.84224 8.1211 0.860201 8.33124C0.878161 8.54138 0.962101 8.74046 1.10002 8.90002L2.37002 10.34C2.53034 10.5225 2.61875 10.7571 2.61875 11C2.61875 11.2429 2.53034 11.4775 2.37002 11.66L1.10002 13.1C0.962101 13.2596 0.878161 13.4587 0.860201 13.6688C0.84224 13.8789 0.891178 14.0894 1.00002 14.27L3.00002 17.73C3.10512 17.9125 3.26514 18.0571 3.45727 18.1433C3.6494 18.2295 3.86384 18.2529 4.07002 18.21L5.95002 17.83C6.18924 17.7806 6.43827 17.8204 6.65013 17.942C6.86199 18.0636 7.02202 18.2585 7.10002 18.49L7.71002 20.32C7.7796 20.527 7.91501 20.7055 8.09558 20.8283C8.27615 20.9511 8.49195 21.0114 8.71002 21H12.71C12.9197 21.0006 13.1242 20.9352 13.2946 20.8132C13.4651 20.6912 13.5929 20.5186 13.66 20.32L14.27 18.49C14.348 18.2585 14.508 18.0636 14.7199 17.942C14.9318 17.8204 15.1808 17.7806 15.42 17.83L17.3 18.21C17.5062 18.2529 17.7206 18.2295 17.9128 18.1433C18.1049 18.0571 18.2649 17.9125 18.37 17.73L20.37 14.27C20.4762 14.0873 20.5218 13.8757 20.5002 13.6655C20.4787 13.4553 20.3911 13.2573 20.25 13.1L18.9 11.66ZM17.41 13L18.21 13.9L16.93 16.12L15.75 15.88C15.0298 15.7328 14.2806 15.8551 13.6446 16.2238C13.0086 16.5925 12.5302 17.1819 12.3 17.88L11.92 19H9.36002L9.00002 17.86C8.76987 17.1619 8.2914 16.5725 7.65542 16.2038C7.01945 15.8351 6.27024 15.7128 5.55002 15.86L4.37002 16.1L3.07002 13.89L3.87002 12.99C4.36197 12.44 4.63395 11.7279 4.63395 10.99C4.63395 10.2521 4.36197 9.54004 3.87002 8.99002L3.07002 8.09002L4.35002 5.89002L5.53002 6.13002C6.25024 6.27724 6.99945 6.1549 7.63542 5.78622C8.2714 5.41753 8.74987 4.82818 8.98002 4.13002L9.36002 3.00002H11.92L12.3 4.14002C12.5302 4.83818 13.0086 5.42753 13.6446 5.79622C14.2806 6.1649 15.0298 6.28724 15.75 6.14002L16.93 5.90002L18.21 8.12002L17.41 9.02002C16.9236 9.56878 16.655 10.2767 16.655 11.01C16.655 11.7433 16.9236 12.4513 17.41 13ZM10.64 7.00002C9.84889 7.00002 9.07553 7.23461 8.41774 7.67414C7.75994 8.11366 7.24725 8.73838 6.9445 9.46928C6.64175 10.2002 6.56254 11.0045 6.71688 11.7804C6.87122 12.5563 7.25218 13.269 7.81159 13.8284C8.371 14.3879 9.08373 14.7688 9.85966 14.9232C10.6356 15.0775 11.4398 14.9983 12.1708 14.6955C12.9017 14.3928 13.5264 13.8801 13.9659 13.2223C14.4054 12.5645 14.64 11.7911 14.64 11C14.64 9.93915 14.2186 8.92174 13.4684 8.17159C12.7183 7.42144 11.7009 7.00002 10.64 7.00002ZM10.64 13C10.2445 13 9.85778 12.8827 9.52888 12.663C9.19998 12.4432 8.94363 12.1308 8.79226 11.7654C8.64088 11.3999 8.60128 10.9978 8.67845 10.6098C8.75562 10.2219 8.9461 9.86551 9.2258 9.5858C9.50551 9.3061 9.86188 9.11562 10.2498 9.03845C10.6378 8.96128 11.0399 9.00088 11.4054 9.15226C11.7708 9.30363 12.0832 9.55998 12.303 9.88888C12.5227 10.2178 12.64 10.6045 12.64 11C12.64 11.5304 12.4293 12.0392 12.0542 12.4142C11.6792 12.7893 11.1705 13 10.64 13Z" fill="#1E0D03"/>
</svg> <span className={cx("text")}>Cài đặt</span>
</div>      
        </div>
    </div>
}

export default Sidebar;