import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <section className="sidebar">
      <NavLink className="logo__text logo__text_transform" to="/">unschooler&nbsp;IT</NavLink>
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