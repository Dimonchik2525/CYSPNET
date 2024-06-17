import Button from "../../Common/Button";
import { SVGAnaliticIcon, SVGCoachIcon, SVGComentatorIcon, SVGJudgeIcon, SVGManagerIcon, SVGMouseIcon, SVGSkautIcon } from "../../SvgIcons";

export const Choice = () => {
   /*<SVGSkautIcon />
                     <SVGAnaliticIcon />
                     <SVGCoachIcon />
                     <SVGComentatorIcon />
                     <SVGJudgeIcon />
                     <SVGMouseIcon />
                     <SVGManagerIcon />*/
   return (
      <div className="choice">
         <div className="choice__container">
            <div className="choice__container">
               <div className="choice__block">
                  <div className="choice__content">
                     <h2 className="choice__content__title">Выберите, кем хотите стать</h2>
                     <div className="choice__content-main__slider swiper">
                        <div className="choice__content-main__wrapper swiper-wrapper">
                           <div className="choice__content-main__slide swiper-slide">
                              <article className="choice__content-main__person">
                                 <div className="choice__content-main__person__img"></div>
                                 <div className="choice__content-main__person__title">Аналитик</div>
                              </article>
                           </div>
                        </div>
                     </div>
                     <div className="choice__content-text__slider swiper">
                        <div className="choice__content-text__wrapper swiper-wrapper">
                           <article className="choice__content-text__slide swiper-slide">
                              <div className="choice__content-text__text">
                                 Оценивает пользователей и сообщества сайта. Этих участников сайта могут нанять организаторы турниров для проведения предматчевой и послематчевой аналитики.
                              </div>
                           </article>
                        </div>
                     </div>
                  </div>
                  <Button class={'choice__join'}>Присоединиться</Button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Choice;