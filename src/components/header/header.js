import React, { useState } from 'react';
import Burger from "./burger";
import HeaderLogo from "./headerLogo";
import Nav from "./nav";
import NavMobile from "./nav-mobile";

const Header = () => {

  const [active, setActive] = useState(false);

  const chengeActive = () => {
    setActive(!active);
  }

  return (
    <header className="header">
      <HeaderLogo />
      <Burger Click={chengeActive} />
      <Nav />
      <NavMobile Show={active} Click={chengeActive} />
    </header>
  )
}

export default Header;