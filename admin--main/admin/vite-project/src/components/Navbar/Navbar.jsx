import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets'
import logoutIcon from '../../assets/logout_icon.png';

const Navbar = () => {
  const [token, setToken] = useState(null); 

  const logout = () => {
    setToken(null);
  };

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="logo" />

      {!token ? (

        <button onClick={() => setToken('dummy_token')}>Sign in</button>
      ) : (
     
        <div className='navbar-profile'>
          <img className='profile' src={assets.profile_image} alt="profile_image" />
          <ul className="navbar-profile-dropdown">
            {/* Add logout option */}
            <li onClick={logout}>
            <img src={logoutIcon} alt='logout_icon' />
              <p>Logout</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
