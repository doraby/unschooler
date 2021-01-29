import React, { useState } from 'react';
import ProfessionSelect from '../profession/professionSelect';
import Burger from "./burger";
import HeaderLogo from "./headerLogo";
import Nav from "./nav";
import NavMobile from "./nav-mobile";

const Header = (props) => {

  const {...other} = props;
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((current) => !current);
  }

  return (
    <>
    <header className="header">
      <HeaderLogo />
      <Burger onShowNav={handleChangeActive} />
      <Nav />
      <NavMobile Show={active} onShowNav={handleChangeActive} />
    </header>
    <ProfessionSelect  {...other}/>
    </>
  )
}

export default Header;