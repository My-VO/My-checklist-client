import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';

import logo from '../assets/images/favicon/logo.png';
import { ReactComponent as CompteIcon } from '../assets/images/icons/compte.svg';

function Header() {
  const { state } = useContext(AuthContext);

  return (
    <section className="header">
      <Link to="/">
        <div className="header__branch">
          <img
            src={logo}
            alt="logo"
          />
          <p className="header__branch__name">Checklist</p>
        </div>
      </Link>
      <Link to="/account/login" className="header__link">
        <CompteIcon className="header__link__icon" />
        <span>{!state.user && 'Compte'}</span>
        <span>{state.user && state.user.first_name}</span>
        <span>{state.user && state.user.firstName}</span>
      </Link>
    </section>
  );
}

export default Header;
