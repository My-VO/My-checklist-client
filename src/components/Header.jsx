import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';

import logo from '../assets/images/favicon/logo.png';
import { ReactComponent as CompteIcon } from '../assets/images/icons/compte.svg';

function Header() {
  const { state } = useContext(AuthContext);

  return (
    <section className="header">
      <div>
        <Link to="/">
          <div>
            <img
              src={logo}
              alt="logo"
            />
            <p>Check list</p>
          </div>
        </Link>
      </div>
      <Link to="/account/login">
        <CompteIcon />
        <span>{!state.user && 'Compte'}</span>
        <span>{state.user && state.user.first_name}</span>
        <span>{state.user && state.user.firstName}</span>
      </Link>
    </section>
  );
}

export default Header;
