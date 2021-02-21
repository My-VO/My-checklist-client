import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import AuthContextProvider from './components/contexts/AuthContext';

import Routes from './Routes';

import './App.scss';

function App() {
  return (
    <HelmetProvider>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </HelmetProvider>
  );
}

export default App;
