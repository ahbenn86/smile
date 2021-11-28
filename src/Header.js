import React from 'react';
import './Header.css';
import { MdSearch, MdOutlineShoppingBasket } from 'react-icons/md';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
        <Link to='/'>
          <img
            className='header__logo'
            src='https://pngimg.com/uploads/mouth_smile/mouth_smile_PNG2.png'
            alt='smile logo'
          />
        </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <MdSearch className='header__searchIcon' size={30} />
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Smile</span>
        </div>
        <div className='header__optionBasket'>
          <Link to="/checkout">
          <MdOutlineShoppingBasket size={30} />
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
