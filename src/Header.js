import React from 'react';
import './Header.css';
import { Search, Home, SupervisorAccount, BusinessCenter, Chat, Notifications } from '@mui/icons-material';
import { linkedIn } from './assets';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className="header">

        <div className="header__left">
            <img src={linkedIn} alt="" />

            <div className="header__search">
              <Search />
              <input placeholder="Search" type="text" />
            </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={Home} title='Home' />
          <HeaderOption Icon={SupervisorAccount} title='My Network' />
          <HeaderOption Icon={BusinessCenter} title='Jobs' />
          <HeaderOption Icon={Chat} title='Messaging' />
          <HeaderOption Icon={Notifications} title='Notifications' />
          <HeaderOption 
            avatar={true}
            title='Logout'
            onClick={logoutOfApp} />
        </div>
    </div>
  )
}

export default Header