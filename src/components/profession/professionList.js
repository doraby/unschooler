import React from 'react';
import classNames from 'classnames';

const ProfessionList = (props) => {
  const {professionSelected, handleProfessionSelected} = props;

  const defineProfessionButtonClass = (currentButton) => {
    if (currentButton === professionSelected) return classNames('button_profession', 'button_profession_active');
    return classNames('button_profession');
  }
  
  return (
    <div className="profession_button">
      <button className={defineProfessionButtonClass('Web-дизайнер')}
              onClick={() => handleProfessionSelected('Web-дизайнер')}>Web-дизайнер
      </button>
      <button className={defineProfessionButtonClass('HTML&CSS')}
              onClick={() => handleProfessionSelected('HTML&CSS')}>HTML&CSS
      </button>
      <button className={defineProfessionButtonClass('Frontend-Программист')}
              onClick={() => handleProfessionSelected('Frontend-Программист')}>Frontend-Программист
      </button>
      <button className={defineProfessionButtonClass('Backend-Программист')}
              onClick={() => handleProfessionSelected('Backend-Программист')}>Backend-Программист
      </button>
      <button className={defineProfessionButtonClass('Тестировщик')}
              onClick={() => handleProfessionSelected('Тестировщик')}>Тестировщик
      </button>
      <button className={defineProfessionButtonClass('Менеджер проектов')}
              onClick={() => handleProfessionSelected('Менеджер проектов')}>Менеджер проектов
      </button>
      <button className={defineProfessionButtonClass('Менеджер продукта')}
              onClick={() => handleProfessionSelected('Менеджер продукта')}>Менеджер продукта
      </button>
      <button className={defineProfessionButtonClass('Бизнес аналитик')}
              onClick={() => handleProfessionSelected('Бизнес аналитик')}>Бизнес аналитик
      </button>
    </div>
  );
}

export default ProfessionList;