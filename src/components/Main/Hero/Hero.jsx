import Button from "../../Common/Button";
import Tooltip from "../../Common/Tooltip";

export const Hero = (props) => {
   return (
      <section className="hero">
         <div className="hero__container">
            <div className="hero__block">
               <div className="hero__content">
                  <h3 className="hero__content__title">Cyber Sport Network</h3>
                  <h2 className="hero__content__subtitle">Играй, развивайся и выигрывай вместе с нами</h2>
                  <ul className="hero__content__list">
                     <li className="hero__content__item"><span>Ежедневные турниры</span></li>
                     <li className="hero__content__item"><span>Денежные призы</span></li>
                     <li className="hero__content__item"><span>Свой подход к читерству</span></li>
                     <li className="hero__content__item"><span>Уникальная рейтинговая система</span></li>
                     <li className="hero__content__item"><span>Развитие в любой отрасли киберспорта</span></li>
                     <li className="hero__content__item"><span>Интересный матчмейкинг</span></li>
                  </ul>
                  <article className="hero__content__actions">
                     <Button class={'hero__content__actions__join'}>Присоединиться</Button>
                     <div className="hero__content__actions__about">
                        <button>О проекте</button>
                     </div>
                  </article>
               </div>
               <div className="hero__img">
                  <img src={props.size > 700 ? "img/hero/hero__img.png" : "img/hero/hero__img__2.png"} alt=""></img>
               </div>
            </div>
         </div>
         {props.size > 960 ? <Tooltip /> : ''}
      </section>
   );
}

export default Hero;