import Burger from "./burger";
import HeaderLogo from "./headerLogo";
import Nav from "./nav";
import NavMobile from "./nav-mobile";

function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <Burger />
      <Nav />
      <NavMobile />
    </header>
  );
}

export default Header;