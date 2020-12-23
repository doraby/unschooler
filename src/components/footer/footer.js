function Footer() {
  return (
    <footer className="footer">
      <div className="contacts">
        <div className="footer-logo">
          <img className="logo__image" src="src/img/logo.svg" alt="логотип"/>
          <p className="logo__text logo__text_light">Unschooler</p>
        </div>
        <a className="email" href="mailto:unschooler97@gmail.com">unschooler97@gmail.com</a>
      </div>

      <div className="footer-nav">
        <ul className="nav-list">
          <li><a className="nav-list__link" href="/">Web-designer</a></li>
          <li><a className="nav-list__link" href="/">HTML&CSS Верстальщик</a></li>
          <li><a className="nav-list__link" href="/">Frontend Программист</a></li>
          <li><a className="nav-list__link" href="/">Backend Программист</a></li>
          <li><a className="nav-list__link" href="/">Тестировщик</a></li>
          <li><a className="nav-list__link" href="/">Менеджер проектов</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;