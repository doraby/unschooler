function Nav() {
  return (
    <nav className="nav">
      <ul className="site-nav">
        <li className="site-nav__item"><a className="site-nav__link" href="/">профессия</a></li>
        <li className="site-nav__item"><a className="site-nav__link" href="/">курсы</a></li>
        <li className="site-nav__item"><a className="site-nav__link" href="/">проекты</a></li>
        <li className="site-nav__item"><a className="site-nav__link" href="/">работа</a></li>
      </ul>
      <ul className="user-nav">
        <li className="user-nav__item"><a className="user-nav__link" href="/">Войти</a></li>
        </ul>
      </nav>
  );
}

export default Nav;