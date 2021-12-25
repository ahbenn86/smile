import React from 'react';
import './Header.css';
import { MdSearch, MdOutlineShoppingBasket } from 'react-icons/md';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {getAuth} from "firebase/auth";
import { auth } from './firebase';


function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
  }

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
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className='header__option'>
          <span className='header__optionLineOne'>{user ? `${user.email}` : 'Hello Guest'}</span>
          <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
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
