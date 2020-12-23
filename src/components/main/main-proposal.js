function MainProposal() {
  return (
    <section className="proposal">
      <div className="proposal__content">
        <div>
          <h3 className="proposal__title">Партнёрам</h3>
            <p className="proposal__text">У&nbsp;тебя есть идея проекта, но&nbsp;нет инвестиций. Опиши его подробно и&nbsp;стань партнером. Мы&nbsp;реализуем
            его вместе с&nbsp;тобой для тренировки.</p>
        </div>
        <div className="proposal__button">
          <a className="button button_medium" href="/">Заявка партнёра</a>
        </div>
      </div>

      <div className="proposal__content">
        <div>
          <h3 className="proposal__title">Менторам</h3>
            <p className="proposal__text">Ты&nbsp;уже профи и&nbsp;время от&nbsp;времени подумываешь сделать свой
                        стартап, собрать команду с&nbsp;нуля или найти помощника. Подай заявку
                        на&nbsp;менторство и&nbsp;собирай свою команду.</p>
        </div>
        <div className="proposal__button">
          <a className="button button_medium" href="/">Заявка ментора</a>
        </div>
      </div>

      <div className="proposal__content">
        <div>
          <h3 className="proposal__title">Рекрутёрам</h3>
          <p className="proposal__text">Ищешь специалиста в&nbsp;штат? 
            <a className="proposal__link" href="/">Наши ребята все с&nbsp;опытом и&nbsp;реальными проектами в&nbsp;портфолио.</a>
             Опиши специалиста и&nbsp;мы&nbsp;прокачаем его в&nbsp;необоходимых скиллах.
          </p>
        </div>
        <div className="proposal__button">
          <a className="button button_medium" href="/">Заявка рекрутера</a>
        </div>
      </div>
    </section>
  );
}

export default MainProposal;