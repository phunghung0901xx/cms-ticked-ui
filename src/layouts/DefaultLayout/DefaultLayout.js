
import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';
import Container from '../components/Container/Container'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
   
       
        <div className={cx('DefaultLayout')}>
            
            <Header />
           
                
    
            <Container/> 
                
        
            
      
         
              <Sidebar />
              
            
        </div>
        
    );
}



export default DefaultLayout;