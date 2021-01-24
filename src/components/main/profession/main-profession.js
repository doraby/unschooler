import React from 'react';
import ProfessionLogo from './profession-logo';

const MainProfession = () => {
  return (
    <section className="profession">
      <div className="profession__content">
        <ProfessionLogo />
        <span className="profession__arrows"></span>
        <p className="thought thought_1">Все сложно, ничего не понятно. Игре конец.</p>
        <p className="thought thought_2">Работа в&nbsp;прачечной. Пропусти ход.</p>
        <p className="thought thought_3">Кладбище незакрытых вкладок. Game over.</p>
        <p className="thought thought_4">Работа в&nbsp;Министерстве Культуры. Пропусти два хода.</p>
      </div>
    </section>
  );
}

export default MainProfession;