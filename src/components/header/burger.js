import React from 'react';

const Burger = ({onShowNav}) => {
  return (
    <div className="burger" onClick={onShowNav}>
      <div className="burger__menu"></div>
      <div className="burger__menu"></div>
    </div>
  );
}

export default Burger;