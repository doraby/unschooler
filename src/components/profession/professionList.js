import React from 'react';
//import classNames from 'classnames';

const ProfessionList = (props) => {
  const {handleProfessionSelected} = props;
  return (
    <div className="profession">
      <button className="site-nav__item" onClick={() => handleProfessionSelected('Web-дизайнер')}>Web-дизайнер</button>
      <button className="site-nav__item" onClick={() => handleProfessionSelected('HTML&CSS')}>HTML&CSS</button>
      <button className="site-nav__item" onClick={() => handleProfessionSelected('Frontend-Программист')}>Frontend-Программист</button>
      <button className="site-nav__item" onClick={() => handleProfessionSelected('Backend-Программист')}>Backend-Программист</button>
      <button className="site-nav__item" onClick={() => handleProfessionSelected('Тестировщик')}>Тестировщик</button>
      <button className="site-nav__item" onClick={() => handleProfessionSelected('Менеджер проектов')}>Менеджер проектов</button>
      <button className="site-nav__item" onClick={() => handleProfessionSelected('Менеджер продукта')}>Менеджер продукта</button>
      <button className="site-nav__item" onClick={() => handleProfessionSelected('Бизнес аналитик')}>Бизнес аналитик</button>
    </div>
  );
}

export default ProfessionList;