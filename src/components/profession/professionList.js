import React from 'react';
//import classNames from 'classnames';

const ProfessionList = (props) => {
  const {handleProfessionSelected} = props;
  return (
    <div className="profession_button">
      <button className="button_profession" onClick={() => handleProfessionSelected('Web-дизайнер')}>Web-дизайнер</button>
      <button className="button_profession" onClick={() => handleProfessionSelected('HTML&CSS')}>HTML&CSS</button>
      <button className="button_profession" onClick={() => handleProfessionSelected('Frontend-Программист')}>Frontend-Программист</button>
      <button className="button_profession" onClick={() => handleProfessionSelected('Backend-Программист')}>Backend-Программист</button>
      <button className="button_profession" onClick={() => handleProfessionSelected('Тестировщик')}>Тестировщик</button>
      <button className="button_profession" onClick={() => handleProfessionSelected('Менеджер проектов')}>Менеджер проектов</button>
      <button className="button_profession" onClick={() => handleProfessionSelected('Менеджер продукта')}>Менеджер продукта</button>
      <button className="button_profession" onClick={() => handleProfessionSelected('Бизнес аналитик')}>Бизнес аналитик</button>
    </div>
  );
}

export default ProfessionList;