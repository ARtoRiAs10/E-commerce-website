// Navbar.js
import React from 'react';
import { FaHeart, FaShoppingBasket, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
<header>
    <div class="header1">
        <a href="#" class="logo"><FaShoppingBasket size={26}  />
        Organic Food </a>

        <form action="" class="search-box-container">
            <input type="search" id="search-box" placeholder="search here..."/>
            <label for="search-box" class="fas fa-search"></label>
        </form>
    </div>
    <div class="header2">
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav class="navbar">
            <a href="/">home</a>
            <a href="#category">category</a>
            <a href="#product">product</a>
            <a href="#deal">deal</a>
            <a href="/">contact</a>
        </nav>
        <div class="icons">
            {/* <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="file:///E:/Practice_Web_d/react_project/e-commerce-website/Website%20with%20Login%20&%20Registration%20Form/index.html" class="fas fa-user-circle"></a> */}
            <a href="#">
            {/* <FaShoppingCart /> Shopping cart icon */}
            <FaShoppingCart size={24} color="red" />
            </a>
            <a href="#">
            <FaHeart /> {/* Heart icon */}
            </a>
            <a href="/login">
            <FaUserCircle /> {/* User circle icon */}
            </a>
        
        </div>
    </div>
</header>

  );
};

export default Navbar;
