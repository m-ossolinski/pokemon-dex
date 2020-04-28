import React from 'react';
import NavigationBar from './NavigationBar';
import logo from './poketext.png';

import './topBar.scss';

export const TopBar = (props) => {
  const { children } = props;

  return (
    <section className="top-bar">
      <div className="top-bar__navigation">
        <img className="top-bar__navigation-logo" src={logo} alt="poketext"/>
        <NavigationBar />
      </div>
      {children}
    </section>
  )
}

export default TopBar;