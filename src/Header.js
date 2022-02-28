import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    return (
        <div className='header'>

            <img
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG28.png"
            ></img>

            <div className ="header_search">
            <input className="header_searchInput" type="text"/>
            {/* {Logo} */}
            <SearchIcon className="header_searchIcon" />
            </div>
              
            <div className="header_nav"> 
                <div className="header_option">
                    <span className="header_option1">Hello</span>
                    <span className="header_option1">Sign in</span>
                </div>
                <div className="header_option">
                    <span className="header_option1">Returns</span>
                    <span className="header_option1">&Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_option1">Your</span>
                    <span className="header_option1">Prime</span>
                </div>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLine2 header_basketCount">0</span>
                </div>
            </div>
            
        </div>
    )
}

export default Header
