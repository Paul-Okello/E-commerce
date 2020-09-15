import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__OptionLineOne">Hello Guest</span>
          <span className="header__OptionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__OptionLineOne">Returns</span>
          <span className="header__OptionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__OptionLineOne">Your</span>
          <span className="header__OptionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__OptionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
