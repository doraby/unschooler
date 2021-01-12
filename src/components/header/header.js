import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import Burger from "./burger";
import HeaderLogo from "./headerLogo";
import Nav from "./nav";
import NavMobile from "./nav-mobile";

class Header extends Component {
  state = {
    DropOpen: false
  };

  DropClick = (prevState) => {
    this.setState(
      (prevState) => {
        return {DropOpen: !prevState.DropOpen}
      }
    )
  };

  CloseClick = () => {
    this.setState({DropOpen: false})
  };
  
  render () {
    //const [isActiveMenu, setIsActiveMenu] = useState(false);
    return (
      <header className="header">
        <HeaderLogo />
        <Burger Click={this.DropClick} />
        <Nav />
        <NavMobile Show={this.state.DropOpen} Click={this.CloseClick} />
      </header>
    );
  }
};

export default Header;