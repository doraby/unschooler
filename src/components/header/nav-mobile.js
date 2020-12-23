function NavMobile() {
  return (
    <nav className="nav-mobile">
      <ul class="site-nav-mobile">
        <li className="site-nav__item"><a className="site-nav__link" href="/">профессия</a></li>
        <li className="site-nav__item"><a className="site-nav__link" href="/">курсы</a></li>
        <li className="site-nav__item"><a className="site-nav__link" href="/">проекты</a></li>
        <li className="site-nav__item"><a className="site-nav__link" href="/">работа</a></li>
      </ul>
      <ul className="user-nav-mobile">
        <li className="user-nav__item"><a className="user-nav__link" href="/">Войти</a></li>
      </ul>
      <ul className="social-mobile">
        <li className="social__button">
          <a className="icon icon_youtube" href="/">
            <span className="visually-hidden">Youtube</span>
          </a>
        </li>
        <li className="social__button">
          <a className="icon icon_twitter" href="/">
            <span className="visually-hidden">Twitter</span>
          </a>
        </li>
        <li className="social__button">
          <a className="icon icon_facebook" href="/">
            <span className="visually-hidden">Facebook</span>
          </a>
        </li>
      </ul>
      <button className="close-button"><span class="visually-hidden">Закрыть</span></button>
    </nav>
  );
}

export default NavMobile;