function Sidebar() {
  return (
    <section className="sidebar">
      <a className="logo__text logo__text_transform" href="/">unschooler&nbsp;IT</a>
      <ul className="social">
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
    </section>
  );
}

export default Sidebar;