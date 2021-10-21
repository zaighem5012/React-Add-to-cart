import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './header.css'
const Header = (props) => {
    return(
        <header className='container'>
            <div className='header-item'>
            <div className='left'>
                <h1>CART</h1>
            </div>
            <div className='right'>
            <i class="fa fa-shopping-cart"> <sup>{props.count}</sup></i>
           
            </div>
            </div>
        </header>
    )
}
export default Header