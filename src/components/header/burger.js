const Burger = (props) => {
  return (
    <div className="burger" onClick={props.Click}>
      <div className="burger__menu"></div>
      <div className="burger__menu"></div>
    </div>
  );
}

export default Burger;