import React, { useState } from 'react';
import Burger from "./burger";
import HeaderLogo from "./headerLogo";
import Nav from "./nav";
import NavMobile from "./nav-mobile";

const Header = () => {

  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((current) => !current);
  }

  return (
    <header className="header">
      <HeaderLogo />
      <Burger onShowNav={handleChangeActive} />
      <Nav />
      <NavMobile Show={active} onShowNav={handleChangeActive} />
    </header>
  )
}

export default Header;