import Button from "../../Common/Button";
import Tooltip from "../../Common/Tooltip";

export const Hero = () => {
   return (
      <div className="hero">
         <div className="hero__container">
            <div className="hero__block">
               <div className="hero__content">
                  <h3 className="hero__content__title">Cyber Sport Network</h3>
                  <h2 className="hero__content__subtitle">Играй, развивайся и выигрывай вместе с нами</h2>
                  <ul className="hero__content__list">
                     <li className="hero__content__item">Ежедневные турниры</li>
                     <li className="hero__content__item">Денежные призы</li>
                     <li className="hero__content__item">Свой подход к читерству</li>
                     <li className="hero__content__item">Уникальная рейтинговая система</li>
                     <li className="hero__content__item">Развитие в любой отрасли киберспорта</li>
                     <li className="hero__content__item">Интересный матчмейкинг</li>
                  </ul>
                  <div className="hero__content__actions">
                     <Button class={'hero__content__actions__join'}>Присоединиться</Button>
                     <div className="hero__content__actions__about">
                        <button>О проекте</button>
                     </div>
                  </div>
               </div>
               <div className="hero__img">
                  <img src="img/hero/hero__img.png" alt=""></img>
               </div>
            </div>
         </div>
         <Tooltip />
      </div>
   );
}

export default Hero;